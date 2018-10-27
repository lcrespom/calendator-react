import React from 'react'

function noop() {}

function formGroup({
	label, type = 'text', value = '', after = '', attrs = {}, changed = noop
}) {
	//TODO: apply attrs
	return (
		<div className="form-group">
			<label>{label}</label>
			<input type={type} defaultValue={value} onChange={changed}
				className="form-control" />
			{' ' + after}
		</div>
	)
}

export default formGroup
