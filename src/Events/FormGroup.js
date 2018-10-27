import React from 'react'

function formGroup({ label, type = 'text',
	value = '', after = '', attrs = {}, changed, name }) {
	return (
		<div className="form-group">
			<label>{label}</label>
			<input type={type} value={value} onChange={changed} name={name}
				{...attrs} className="form-control" />
			{' ' + after}
		</div>
	)
}

export default formGroup
