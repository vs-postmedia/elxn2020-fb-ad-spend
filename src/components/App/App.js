import React from 'react';
import AdSpendTracker from '../AdSpendTracker/AdSpendTracker';
import './App.css';

const adSpendUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/elxn/ad-spend.json';

function App() {
	return (
	  	<div className="App">
	  		<h1>Amount spent on Facebook ads since the election was called on Sept. 21</h1>
	  		<AdSpendTracker	
	  			dataUrl={adSpendUrl}>
	  		</AdSpendTracker>
	  	</div>
	);
}

export default App;
