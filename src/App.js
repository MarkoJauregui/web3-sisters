import React from 'react';
import { CTA, Navbar } from './components';
import { Features, Footer, Header, Possibility, WhatWeb3 } from './containers';

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<WhatWeb3 />
			<Features />
			<Possibility />
			<CTA />
			<Footer />
		</div>
	);
};

export default App;
