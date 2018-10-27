import React, { Component } from 'react'
import './App.css'
import Events from './Events/Events'
import { randomColor, date2html } from './utils'


class App extends Component {
	state = {
		events: []
	}

	addEventHandler = () => {
		let events = [...this.state.events]
		events.push({
			id: Date.now(),
			name: '',
			color: randomColor(),
			start: date2html(new Date()),
			duration: '1',
			every: '1',
			repeat: '1'
		})
		this.setState({ events })
	}

	changeEventHandler = (event) => {
		let events = [...this.state.events]
		let idx = events.findIndex(e => e.id === event.id)
		events[idx] = event
		this.setState({ events })
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
