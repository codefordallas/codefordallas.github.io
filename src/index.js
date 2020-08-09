import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Mission from './components/Mission';
import ContactUs from './components/ContactUs';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Mission />
				<ContactUs />
			</div>
		);
	}
}

const HTMLRoot = document.getElementById('root');
HTMLRoot ? ReactDOM.render(<App />, HTMLRoot) : false;
