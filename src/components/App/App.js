import React from 'react';
import AdSpendTracker from '../AdSpendTracker/AdSpendTracker';
import './App.css';

const adSpendUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/elxn/ad-spend.json';

function App() {
	return (
	  	<div className="App">
	  		<h2>The Liberals are outspending the NDP and the Greens by a wide margin...</h2>
	  		<AdSpendTracker	
	  			dataUrl={adSpendUrl}>
	  		</AdSpendTracker>
	  	</div>
	);
}

export default App;

// <h1>This is how much each party has spent on Facebook ads since the election was called</h1>
