import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import SummaryBox from '../SummaryBox/SummaryBox';
import DailyCharts from '../DailyCharts/DailyCharts';
import './AdSpendTracker.css';


export default class AdSpendTracker extends Component {
	state = {
		party_data: [],
		party_daily: []
	}

	componentDidMount() {
		Axios.get(this.props.dataUrl)
			.then(resp => {
				this.setState({
					last_update: resp.data.lastUpdate,
					party_data: resp.data.party_total,
					party_daily: resp.data.party_daily,
					party_order: resp.data.party_total.map(d => d.party)
				});
			});
	}

	render() {
		if (this.state.party_data.length > 0) {
			return (
				<Fragment>
					<SummaryBox className="summary-box"
						data={this.state.party_data}
						lastUpdate={this.state.last_update}>
					</SummaryBox>

					<DailyCharts
						data={this.state.party_daily}
						order={this.state.party_order}>
					</DailyCharts>
				</Fragment>
			);
		} else {
			return (
				<Fragment />
			)
		}
	}
}
