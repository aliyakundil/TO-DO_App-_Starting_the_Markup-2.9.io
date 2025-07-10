function Task({ description, created, completed, editing, task, onDelete }) {
	const listView = completed ? "completed" : editing ? "editing" : "";

	return (
		<li className={listView}>
			<div className="view">
				<input className="toggle" type="checkbox" />
				<label>
					<span className="description">{description}</span>
					<span className="created">{created}</span>
				</label>
				<button className="icon icon-edit" ></button>
				<button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
			</div>
		</li>
	);
}

export default Task;
