import React from 'react'

function noop() {}

function formGroup({
	label, type = 'text', value = '', after = '', attrs = {}, changed = noop
}) {
	return (
		<div className="form-group">
			<label>{label}</label>
			<input type={type} value={value} onChange={changed}
				{...attrs} className="form-control" />
			{' ' + after}
		</div>
	)
}

export default formGroup
