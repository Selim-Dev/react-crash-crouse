import React, { useState } from 'react'

const NewTodoForm = ({ onSubmit }) => {
	const [newItem, setNewItem] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('form submitted')
		onSubmit(newItem)
		setNewItem("")

	}
	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<div className='form-row' >
				<label htmlFor="item" >Todo Application</label>
				<input
					onChange={event => setNewItem(event.target.value)}
					value={newItem}
					type="text"
					id="item"
				/>
			</div>
			<button className='btn'>Add</button>
		</form>
	)
}

export default NewTodoForm