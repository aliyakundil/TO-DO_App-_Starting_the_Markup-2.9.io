import Task from "./Task"

function TaskList({ tasks = [] }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => {
        return (
          <Task 
            key = {index}
            description = {task.description}
            created = {task.created}
            completed = {task.completed}
            editing = {task.editing}
          />
        )
      })}
    </ul>
  )
}

export default TaskList;