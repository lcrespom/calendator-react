import React from 'react'
import './Events.css'
import Event from './Event'


function events(props) {
	return (
		<div id="events">
			<div style={{textAlign: 'center'}}>
				<button className="btn btn-primary"
					onClick={props.addEvent}>
					Add event
				</button>
			</div>
			<div id="event-list">
				{props.events.map(evt =>
					<Event key={evt.id} event={evt}
						changed={event => props.changeEvent(event)}
						deleted={event => props.deleteEvent(event)} />
				)}
			</div>
		</div>
	)
}

export default events
