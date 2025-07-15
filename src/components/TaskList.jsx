import Task from "./Task"

function TaskList({ tasks = [], onDelete, onChange }) {
	return (
		<ul className="todo-list">
			{tasks.map((task) => {
				return (
					<Task 
						key = {task.id}
						description = {task.description}
						created = {task.created}
						completed = {task.completed}
						editing = {task.editing}
						task= {task}
						onDelete={onDelete}
            onChange={onChange}
					/>
				)
			})}
		</ul>
	)
}

export default TaskList;