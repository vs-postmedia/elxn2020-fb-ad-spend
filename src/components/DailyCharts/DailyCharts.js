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
			<h2>Daily Facebook ad spend</h2>
			<div id="charts">
			{
				props.data.map(d => {
					console.log(d)
					
				})
			}
			</div>

			<p className="source">Source: <a href="https://www.facebook.com/ads/library/" target="_blank" rel="noopener noreferrer">Facebook Ad Library</a> • NOTE: Liberal party spending includes ads run under the “Andrew Wilkinson for B.C.” Facebook page. The minimum daily total provided by Facebook is $100, so parties may have spent less on those days. Data includes ads placed on Facebook, Instagram, WhatsApp and Messenger.</p>
		</div>
	);
}




export default DailyCharts;

