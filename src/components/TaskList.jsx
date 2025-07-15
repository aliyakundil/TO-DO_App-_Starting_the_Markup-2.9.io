import Task from "./Task"

function TaskList({ tasks = [], onDelete, onToggleCompleted, onEditing, onDescrtiption }) {
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
            onDescrtiption={onDescrtiption}
					/>
				)
			})}
		</ul>
	)
}

export default TaskList;