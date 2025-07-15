function Task({ task, onDelete, description, created, onChange }) {
	const listView = task.completed ? "completed" : task.editing ? "editing" : "";

	return (
		<li className={listView}>
			<div className="view">
				<input className="toggle" type="checkbox" />
				<label>
					<span className="description" >{description}</span>
					<span className="created">{created}</span>
				</label>
				<button className="icon icon-edit" onClick={() => onChange(task.id)}></button>
				<button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
			</div>
		</li>
);
}

export default Task;
