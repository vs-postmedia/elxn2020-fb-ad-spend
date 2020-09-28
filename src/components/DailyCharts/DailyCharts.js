import React, { useEffect } from 'react';
import DrawChart from '../DrawChart/DrawChart';
import './DailyCharts.css';

const DailyCharts = (props) => {
	// this is called once the dom element has rendered
	useEffect(()=> {
		DrawChart(props);
	});

	return (
		<div className="daily-charts">
			<h2>Daily Facebook ad spend <span classame="h2-small">($000’s)</span></h2>
			<div id="charts"></div>

			<p className="source">Source: <a href="https://www.facebook.com/ads/library/" target="_blank" rel="noopener noreferrer">Facebook Ad Library</a> • Data only includes spending by the official Facebook pages for each party, except the Liberals, which also includes ads run under the “Andrew Wilkinson for B.C.” Facebook page. The minimum daily total provided by Facebook is $100, so parties may have spent less on those days. Data includes ads placed on Facebook, Instagram, WhatsApp and Messenger.</p>
		</div>
	);
}




export default DailyCharts;

