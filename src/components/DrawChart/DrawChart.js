import * as d3 from 'd3';
import Popup from '@flourish/popup';
import * as d3_annotation from 'd3-svg-annotation';
import helper from '../../js/helper-functions';
import tooltipTemplate from '../TooltipTemplate/tooltip-template';
import './DrawChart.css';


// THE GOOD STUFF
let height, width, x, y, drawAnnotations,drawLabels;
const yTicks = 5;
const breakpoint = 600;
const popup = Popup();
const margin = {
	top: 10,
	right: 15,
	bottom: 35,
	left: 45
};

console.log(d3_annotation)


async function DrawChart(props) {
	// convert dates into something useful
	const data = await parseData(props);

	console.log(data)

	// get container element & determine dimensions
	const chart = d3.select('#charts');
	const dims = chart.node().getBoundingClientRect();

	height = dims.height / 3;
	width = dims.width - margin.left;
	// stacked on mobile
	if (window.innerWidth > breakpoint) {
		height = dims.height;
		width = (dims.width / 3) - margin.left - margin.right;
	}
	
	setupAnnotations(height, margin)
	console.log(dims)

	// setup our svg
	const svg = chart.selectAll('svg')
		.data(data)
		.enter().append('svg')
			.attr('class', d => d.party.toLowerCase())
			.style('height', `${height}px`)
			.style('width', `${width + margin.left}px`)
			// .text(d => d.party)s
			.append('g')
				.attr('transform', `translate(${margin.left}, ${margin.top})`)



    // Add axes
	x = xSetup(data[0].values);
	y = ySetup(data[0].values);
    svg.append('g')
    	.call(xAxis);
    svg.append('g')
    	.call(yAxis);

    // draw the bars
    svg.append('g')
    	.selectAll('rect')
    	.data(d => d.values)
    	.enter().append('rect')
    		.attr('x', d => x(d.date))
    		.attr('y', d => y(d.total))
    		.attr('height', d => y(0) - y(d.total))
    		.attr('width', x.bandwidth())
    		.on('mouseover', handleMouseOver)
    		.on('mouseout', handleMouseOut);


	svg.append('g')
		.attr('class', 'annotation-group')
		.call(drawAnnotations)
}


const handleMouseOut = (d) => {
	popup.hide();
}
const handleMouseOver = (d) => {
	popup.point(d.clientX, d.clientY);
	popup.html(tooltipTemplate(d));
	popup.draw();
}

const parseData = (props) => {
	const data = props.data;
	const order = props.order;

	data.forEach(party => {
		party.values.forEach(d => {
			d.date = d3.timeParse('%Y-%m-%d')(d.date);
		});
	});

	// sort so it matches the order in the big numbers section
	return [
		...data.filter(d => d.party === order[0]),
		...data.filter(d => d.party === order[1]),
		...data.filter(d => d.party === order[2])
	];
};

const setupAnnotations = (height, margin) => {
	const annotations = [{
		className: 'annotation-text',
		data: { x: '09/21/2020'},
		note: { 
			align: 'middle',
			title: 'Election called'
		},
		subject: {
			y1: margin.top + 25,
			y2: height - margin.bottom
		},
		y: margin.top - 15
	}];

	drawAnnotations = d3_annotation.annotation()
		.type(d3_annotation.annotationXYThreshold)
		// gives you access to any data in the annotations array
		.accessors({
			x: d => x(new Date(d.x)),
			y: d => y(d.y)
		})
		.annotations(annotations)
		.textWrap(30)
}
const xAxis = g => {
	const xScale = x.domain();
	g.attr('transform', `translate(0, ${height - margin.bottom})`)
		.attr('class', 'x-axis axis')
		.call(d3.axisBottom(x)
			.tickSize(0)
			.tickFormat(d3.timeFormat('%b. %d'))
			.tickPadding([10])
			.tickValues([xScale[0], xScale[xScale.length - 1]])
		)
};

const yAxis = g => {
	g.attr('class', 'y-axis axis')
		.call(d3.axisLeft(y)
			.ticks(yTicks)
			.tickSize(-width)
			.tickFormat(d => `$${helper.numberWithCommas(d)}`)
		)
		.call(g => g.select('.domain').remove()); // removed the line
};

const ySetup = (data) => {
	return d3.scaleLinear()
		.domain([0, d3.max(data, d => parseInt(d.total))]).nice()
		.range([height - margin.bottom, margin.top])
};

const xSetup = (data) => {
	return d3.scaleBand()
		.rangeRound([0, width], 0.5).padding(0.1)
		.domain(data.map(d => d.date))
};

export default DrawChart;