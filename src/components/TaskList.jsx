import Task from "./Task"

function TaskList({ tasks, onDelete, onToggleCompleted, onEditing, onDescription }) {

	TaskList.defaultProps = {
		tasks: [],
	}

	return (
		<ul className="todo-list">
			{tasks.map((task) => {
				return (
					<Task 
						key={task.id}
						task={task}
						onDelete={onDelete}
						onToggleCompleted={onToggleCompleted}
						onEditing={onEditing}
						onDescription={onDescription}
					/>
				)
			})}
		</ul>
	)
}

export default TaskList;