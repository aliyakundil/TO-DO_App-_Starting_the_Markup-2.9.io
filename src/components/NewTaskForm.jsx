import { useState } from 'react';

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
				onNewTask(tempDescription.trim());
				setTempDescription(""); // очистим поле после добавления
			}
		}}
		/>
	)
}

export default NewTaskForm;