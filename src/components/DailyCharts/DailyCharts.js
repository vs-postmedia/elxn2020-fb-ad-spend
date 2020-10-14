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

			<p className="source">Source: <a href="https://www.facebook.com/ads/library/" target="_blank" rel="noopener noreferrer">Facebook Ad Library</a> • Data includes spending by the official Facebook pages for each party. The minimum daily total provided by Facebook is $100, so expenditures may have been less on days showing $100. Data includes ads placed on Facebook, Instagram, WhatsApp and Messenger.</p>
		</div>
	);
}




export default DailyCharts;

