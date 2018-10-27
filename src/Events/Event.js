import React from 'react'
import FormGroup from './FormGroup';


function changeHandler(evt, props) {
	let event = {...props.event}
	let v = evt.target.value
	if (evt.target.type === 'number') v = parseInt(v)
	event[evt.target.name] = v
	props.changed(event)
}

function event(props) {
	return (
		<div>
			<hr/>
			<FormGroup label="Name" name="name"
				value={props.event.name}
				changed={evt => changeHandler(evt, props)}
				attrs={{ autoFocus:true }}/>
			<FormGroup label="Color" type="color" name="color"
				value={props.event.color}
				changed={evt => changeHandler(evt, props)} />
			<FormGroup label="Start" type="date" name="start"
				value={props.event.start}
				changed={evt => changeHandler(evt, props)} />
			<FormGroup label="Duration" type="number" name="duration"
				after="day(s)" attrs={{ min: 1, step: 1 }}
				value={props.event.duration}
				changed={evt => changeHandler(evt, props)} />
			<FormGroup label="Every" type="number" name="every"
				after="day(s)" attrs={{ min: 1, step: 1 }}
				value={props.event.every}
				changed={evt => changeHandler(evt, props)} />
			<FormGroup label="Repeat" type="number" name="repeat"
				after="time(s)" attrs={{ min: 1, step: 1 }}
				value={props.event.repeat}
				changed={evt => changeHandler(evt, props)} />
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
