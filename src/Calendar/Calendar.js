import React from 'react'

import Month from './Month'
import './Calendar.css'


let MONTHS = [
	'January', 'February', 'March', 'April',
	'May', 'June', 'July', 'August',
	'September', 'October', 'November', 'December'
]

function calendar({ events }) {
	let today = new Date()
	let month = today.getMonth()
	let year = today.getFullYear()
	let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
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
						month={mnum} year={year} events={events}
					/>
				)
			})}
		</div>
	)
}

export default calendar