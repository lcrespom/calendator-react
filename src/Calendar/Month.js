import React from 'react'

import { getMonthWeeks, dayOfWeek, daysInMonth } from '../utils'

let WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


function renderEvents(mnum, year, events) {
	//TODO add event entries that match this date
}

function renderDay(daynum, dim, mnum, year, events) {
	let classes = 'cal-day'
	let isEmpty = daynum <= 0 || daynum > dim
	if (isEmpty) classes += ' cal-empty'
	return (
		<div className={classes} key={daynum}>
			{isEmpty
				? null
				: <div className="cal-cell">
					{daynum}
					{renderEvents(mnum, year, events)}
				  </div>
			}
		</div>
	)
}

function renderDays(mnum, year, events) {
	let days = []
	let totalDays = getMonthWeeks(mnum, year) * 7
	let daynum = 1 - dayOfWeek(new Date(year, mnum, 1))
	let dim = daysInMonth(mnum, year)
	for (let i = 1; i <= totalDays; i++) {
		days.push(renderDay(daynum, dim, mnum, year, events))
		daynum++
	}
	return days
}


function month({ name, month, year, events }) {
	return (
		<div className="cal-month-block">
			<h2>{name}</h2>
			<div className="cal-month">
				{WEEKDAYS.map(weekday =>
					<span key={weekday} className="cal-weekday">{weekday}</span>
				)}
				{renderDays(month, year, events)}
			</div>
		</div>
	)
}

export default month