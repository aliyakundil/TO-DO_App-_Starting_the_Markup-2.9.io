import Task from "./Task"

function TaskList({ tasks = [], onDelete }) {
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
					/>
				)
			})}
		</ul>
	)
}

export default TaskList;