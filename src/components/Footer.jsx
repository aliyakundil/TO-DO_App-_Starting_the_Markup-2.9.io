import TasksFilter from "./TasksFilter";

function Footer({ tasksListCount, currentFilter, onChangeFilter, deleteTaskAllEnd }) {
	return (
		<footer className="footer">
			<span className="todo-count">{tasksListCount} items left</span>
			<TasksFilter 
				currentFilter={currentFilter} 
				onChangeFilter={onChangeFilter} 
			/>
			<button className="clear-completed" onClick={deleteTaskAllEnd}>Clear completed</button>
		</footer>
	)
}

export default Footer;