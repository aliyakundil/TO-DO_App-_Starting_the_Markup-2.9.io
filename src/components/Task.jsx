import { useState, useEffect } from "react";
import { formatDistanceToNow } from 'date-fns';

function Task({ task, onToggleCompleted, onEditing, onDescription, onDelete }) {
  const listView = task.editing ? "editing" : task.completed ? "completed" : "";
  const [tempDescription, setTempDescription] = useState(task.description);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    if (task.editing) {
      setTempDescription(task.description);
    }
  }, [task.editing, task.description]);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 10000); // каждые 10 секунд
    return () => clearInterval(timer);
  }, []);

  return (
    <li className={listView}>
      {!task.editing ? (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            id = {`task-${task.id}`}
            checked={task.completed}
            onChange={() => onToggleCompleted(task.id)}
          />
          <label htmlFor={`task-${task.id}`}>
            <span className="description">{task.description}</span>
            <span className="created">created {formatDistanceToNow(new Date(task.created), { addSuffix: true })}</span>
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
              e.preventDefault();
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