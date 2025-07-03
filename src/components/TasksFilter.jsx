function TasksFilter({currentFilter, onChangeFilter}) {
  return (
    <ul className="filters">
      <li>
        <button 
          className={currentFilter === 'All' ? 'selected' : ''}
          onClick={() => onChangeFilter('All')}
        >
          All
        </button>
      </li>
      <li>
        <button 
          className={currentFilter === 'Active' ? 'selected' : ''}
          onClick={() => onChangeFilter('Active')}
        >
          Active
        </button>
      </li>
      <li>
        <button 
          className={currentFilter === 'Completed' ? 'selected' : ''}
          onClick={() => onChangeFilter('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TasksFilter;