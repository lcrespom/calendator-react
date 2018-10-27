import React from 'react'
import { date2html } from '../utils'

import Month from './Month'
import './Calendar.css'


let MONTHS = [
	'January', 'February', 'March', 'April',
	'May', 'June', 'July', 'August',
	'September', 'October', 'November', 'December'
]

function getEventMap(events) {
	let eventMap = {}
	for (let event of events) {
		let startDate = new Date(event.start)
		for (let i = 0; i < event.repeat; i++) {
			let d = new Date(startDate.getTime())
			for (let j = 0; j < event.duration; j++) {
				let dayId = date2html(d)
				if (eventMap[dayId] === undefined) eventMap[dayId] = []
				eventMap[dayId].push(event)
				d.setDate(d.getDate() + 1)
			}
			startDate.setDate(startDate.getDate() + event.every)
		}
	}
	return eventMap
}


function calendar({ events }) {
	let today = new Date()
	let month = today.getMonth()
	let year = today.getFullYear()
	let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	let eventMap = getEventMap(events)
	return (
		<div id="calendar">
			{months.map(i => {
				let j = month + i
				if (j === 12) year++
				let mnum = j % 12
				let name = `${MONTHS[mnum]} ${year}`
				return (
					<Month
						key={name} name={name}
						month={mnum} year={year}
						eventMap={eventMap}
					/>
				)
			})}
		</div>
	)
}

export default calendar