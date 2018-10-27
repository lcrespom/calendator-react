import React, { Component } from 'react'
import './App.css'
import Events from './Events/Events'

class App extends Component {
	state = {
		events: []
	}

	addEventHandler = () => {
		let events = [...this.state.events]
		events.push({id: Date.now()})
		this.setState({events})
	}

	render() {
		return (
			<div id="main">
				<Events events={this.state.events}
					addEvent={this.addEventHandler}
					changeEvent={this.changeEventHandler}/>
				<div id="calendar"></div>
			</div>
		);
	}
}

export default App;
