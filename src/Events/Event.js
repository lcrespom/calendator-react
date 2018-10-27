import React from 'react'
import FormGroup from './FormGroup';


function changeHandler(evt, field, props) {
	let v = evt.target.value
	let event = {...props.event}
	event[field] = v
	props.changed(event)
}

function event(props) {
	return (
		<div>
			<hr/>
			<FormGroup label="Name"
				value={props.event.name}
				changed={evt => changeHandler(evt, 'name', props)} />
			<FormGroup label="Color" type="color"
				value={props.event.color}
				changed={evt => changeHandler(evt, 'color', props)} />
			<FormGroup label="Start" type="date"
				value={props.event.start}
				changed={evt => changeHandler(evt, 'start', props)} />
			<FormGroup label="Duration" type="number"
				after="day(s)" attrs={{ min: 1, step: 1 }}
				value={props.event.duration}
				changed={evt => changeHandler(evt, 'duration', props)} />
			<FormGroup label="Every" type="number"
				after="day(s)" attrs={{ min: 1, step: 1 }}
				value={props.event.every}
				changed={evt => changeHandler(evt, 'every', props)} />
			<FormGroup label="Repeat" type="number"
				after="time(s)" attrs={{ min: 1, step: 1 }}
				value={props.event.repeat}
				changed={evt => changeHandler(evt, 'repeat', props)} />
			<div className="form-group">
				<label />
				<button
					onClick={_ => props.deleted(props.event)}
					className="btn btn-sm btn-warning">
					Remove event
				</button>
			</div>
		</div>
	)
}

export default event
