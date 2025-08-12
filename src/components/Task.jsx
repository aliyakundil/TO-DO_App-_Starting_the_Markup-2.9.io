import { useState, useEffect } from "react";

function Task({ task, onToggleCompleted, onEditing, onDescription, onDelete }) {
  const listView = task.editing ? "editing" : task.completed ? "completed" : "";
  const [tempDescription, setTempDescription] = useState(task.description);

  useEffect(() => {
    if (task.editing) {
      setTempDescription(task.description);
    }
  }, [task.editing, task.description]);

  return (
    <li className={listView}>
      {!task.editing ? (
        <div className="view">
          <input
            className="toggle"
            checked={task.completed}
            onChange={() => onToggleCompleted(task.id)}
          />
          <label>
            <span className="description">{task.description}</span>
            <span className="created">{task.created}</span>
          </label>
          <button className="icon icon-edit" onClick={() => onEditing(task.id)}></button>
          <button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
        </div>
      ) : (
        <input
          className="edit"
          value={tempDescription}
          onChange={(e) => setTempDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onDescription(task.id, tempDescription);
              onEditing(task.id);
            }
          }}
          
        />
      )}
    </li>
  );
}

export default Task;