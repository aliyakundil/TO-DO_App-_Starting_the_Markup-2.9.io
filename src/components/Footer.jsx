import TaskFilter from "./TasksFilter";

function Footer({ tasksListCount, currentFilter, onChangeFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksListCount} items left</span>
        <TaskFilter 
          currentFilter={currentFilter} 
          onChangeFilter={onChangeFilter} 
        />
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer;