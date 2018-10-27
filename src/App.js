import React, { Component } from 'react'
import './App.css'

import { randomColor, getContrastingColor, date2html } from './utils'
import Events from './Events/Events'
import Calendar from './Calendar/Calendar'


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
			duration: 1,
			every: 1,
			repeat: 1
		}
		let events = [newEvent, ...this.state.events]
		this.setState({ events })
	}

	changeEventHandler = (event) => {
		let events = [...this.state.events]
		let idx = events.findIndex(e => e.id === event.id)
		event.txtcolor = getContrastingColor(event.color)
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
				<Calendar events={this.state.events} />
			</div>
		);
	}
}

export default App;
