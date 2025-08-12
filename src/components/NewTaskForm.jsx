import { useState } from 'react';
import PropTypes from 'prop-types'

function NewTaskForm({ onNewTask }) {
	const [tempDescription, setTempDescription] = useState("");

	return (
		<input 
		className="new-todo"
		placeholder="What needs to be done?"
		autoFocus
		value={tempDescription ?? ""}
		onChange={(e) => setTempDescription(e.target.value)}
		onKeyDown={(e) => {
			if (e.key === "Enter" && tempDescription.trim()) {
				e.preventDefault();
				onNewTask(tempDescription.trim());
				setTempDescription(""); 
			}
		}}
		/>
	)
}

NewTaskForm.propTypes = {
		onNewTask: PropTypes.func.isRequired,
}

export default NewTaskForm;