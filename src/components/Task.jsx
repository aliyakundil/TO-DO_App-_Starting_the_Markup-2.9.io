import { useState, useEffect } from "react";

function Task({ task, onToggleCompleted, onEditing, onDescrtiption }) {
	const listView = task.completed ? "completed" : task.editing ? "editing" : "";

  const [tempDescription, setTempDescription] = useState(task.description);

  useEffect(() => {
    if(task.editing) {
      setTempDescription(task.description);
    }
  }, [task.editing, task.description])

  return (
    <li className={listView}>
      <div className="view">
        <input
          className="toggle"
          checked={task.completed}
          onChange={() => onToggleCompleted(task.id)}
        />
        <label>
          {task.editing ? (
            <input
              className="edit"
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
              onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onDescrtiption(task.id, tempDescription); // сохранить
                    onEditing(task.id); // редактровать
                  }
                }} 
                autoFocus             
            />
          ) : (
            <span className="description">{task.description}</span>
          )}
          <span className="created">{task.created}</span>
        </label>
        <button className="icon icon-edit" onClick={() => onEditing(task.id)}></button>
        <button className="icon icon-destroy" onClick={() => onToggleCompleted(task.id)}></button>
      </div>
    </li>
  );
}

export default Task;

		// <li className={listView}>
		// 	<div className="view">
		// 		<input className="toggle" type="checkbox" />
		// 		<label>
		// 			<span className="description" >{description}</span>
		// 			<span className="created">{created}</span>
		// 		</label>
		// 		<button className="icon icon-edit" onClick={() => onCompleted(task.id)}></button>
		// 		<button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
		// 	</div>
		// </li>