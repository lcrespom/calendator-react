import React from 'react'

import { getMonthWeeks, dayOfWeek, daysInMonth, date2html } from '../utils'

let WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


function renderEvents(daynum, mnum, year, eventMap) {
	let dayId = date2html(new Date(year, mnum, daynum))
	let events = eventMap[dayId]
	if (!events) return null
	return events.map(event =>
		<div className="cal-event" key={event.id}
			style={{ backgroundColor: event.color, color: event.txtcolor }}>
			{event.name}
		</div>
	)
}

function renderDay(daynum, dim, mnum, year, eventMap) {
	let classes = 'cal-day'
	let isEmpty = daynum <= 0 || daynum > dim
	if (isEmpty) classes += ' cal-empty'
	return (
		<div className={classes} key={daynum}>
			{isEmpty
				? null
				: <div className="cal-cell">
					{daynum}
					{renderEvents(daynum, mnum, year, eventMap)}
				  </div>
			}
		</div>
	)
}

function renderDays(mnum, year, eventMap) {
	let days = []
	let totalDays = getMonthWeeks(mnum, year) * 7
	let daynum = 1 - dayOfWeek(new Date(year, mnum, 1))
	let dim = daysInMonth(mnum, year)
	for (let i = 1; i <= totalDays; i++) {
		days.push(renderDay(daynum, dim, mnum, year, eventMap))
		daynum++
	}
	return days
}


function month({ name, month, year, eventMap }) {
	return (
		<div className="cal-month-block">
			<h2>{name}</h2>
			<div className="cal-month">
				{WEEKDAYS.map(weekday =>
					<span key={weekday} className="cal-weekday">{weekday}</span>
				)}
				{renderDays(month, year, eventMap)}
			</div>
		</div>
	)
}

export default month