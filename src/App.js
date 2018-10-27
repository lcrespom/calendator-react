import React, { Component } from 'react'
import './App.css'
import Events from './Events/Events'
import { randomColor, date2html } from './utils'


class App extends Component {
	state = {
		events: []
	}

	addEventHandler = () => {
		let newEvent = {
			id: Date.now(),
			name: '',
			color: randomColor(),
			start: date2html(new Date()),
			duration: '1',
			every: '1',
			repeat: '1'
		}
		let events = [newEvent, ...this.state.events]
		this.setState({ events })
	}

	changeEventHandler = (event) => {
		let events = [...this.state.events]
		let idx = events.findIndex(e => e.id === event.id)
		events[idx] = event
		this.setState({ events })
	}

	deleteEventHandler = (event) => {
		let events = [...this.state.events]
		let idx = events.findIndex(e => e.id === event.id)
		events.splice(idx, 1)
		this.setState({ events })
	}

	render() {
		return (
			<div id="main">
				<Events events={this.state.events}
					addEvent={this.addEventHandler}
					changeEvent={this.changeEventHandler}
					deleteEvent={this.deleteEventHandler}
				/>
				<div id="calendar"></div>
			</div>
		);
	}
}

export default App;
