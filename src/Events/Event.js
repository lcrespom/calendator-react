import React from 'react'
import FormGroup from './FormGroup';

//-------------------- Color utilities --------------------

// Obtained from https://stackoverflow.com/a/9493060/2342681
function hsl2rgb(h, s, l) {
	let r, g, b
	if (s === 0) {
		r = g = b = l // achromatic
	} else {
		let hue2rgb = (p, q, t) => {
			if (t < 0) t += 1
			if (t > 1) t -= 1
			if (t < 1 / 6) return p + (q - p) * 6 * t
			if (t < 1 / 2) return q
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
			return p
		}
		let q = l < 0.5 ? l * (1 + s) : l + s - l * s
		let p = 2 * l - q
		r = hue2rgb(p, q, h + 1 / 3)
		g = hue2rgb(p, q, h)
		b = hue2rgb(p, q, h - 1 / 3)
	}
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

function rgb2hex(r, g, b) {
	let d2h = d => {
		let h = d.toString(16)
		return h.length > 1 ? h : '0' + h
	}
	return `#${d2h(r)}${d2h(g)}${d2h(b)}`
}

function randomColor() {
	let [r, g, b] = hsl2rgb(Math.random(), 1, 0.5)
	return rgb2hex(r, g, b)
}


//-------------------- Date utilities --------------------

function date2html(d) {
	return d.toISOString().split('T')[0]
}


//-------------------- Main --------------------

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
				value={randomColor()}
				changed={evt => changeHandler(evt, 'color', props)} />
			<FormGroup label="Start" type="date"
				value={date2html(new Date())}
				changed={evt => changeHandler(evt, 'start', props)} />
			<FormGroup label="Duration" type="number" value="1"
				after="day(s)" attrs={{ min: 1, step: 1 }}
				changed={evt => changeHandler(evt, 'duration', props)} />
			<FormGroup label="Every" type="number"
				after="day(s)" attrs={{ min: 1, step: 1 }}
				changed={evt => changeHandler(evt, 'every', props)} />
			<FormGroup label="Repeat" type="number"
				after="time(s)" attrs={{ min: 1, step: 1 }}
				changed={evt => changeHandler(evt, 'repeat', props)} />
			<div className="form-group">
				<label />
				<button className="btn btn-sm btn-warning">Remove event</button>
			</div>
		</div>
	)
}

export default event
