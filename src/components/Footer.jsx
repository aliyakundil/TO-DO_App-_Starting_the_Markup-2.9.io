import TasksFilter from "./TasksFilter";

function Footer({ tasksListCount, currentFilter, onChangeFilter, deleteTaskAll }) {
	return (
		<footer className="footer">
			<span className="todo-count">{tasksListCount} items left</span>
			<TasksFilter 
				currentFilter={currentFilter} 
				onChangeFilter={onChangeFilter} 
			/>
			<button className="clear-completed" onClick={deleteTaskAll}>Clear completed</button>
		</footer>
	)
}

export default Footer;