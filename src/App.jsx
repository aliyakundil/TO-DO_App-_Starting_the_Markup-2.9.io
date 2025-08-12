import "./App.css";
import { formatDistanceToNow } from "date-fns";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Установить пакет npm install date-fns

function App() {
	const [tasks, setTasks] = useState([
		{
			id: uuidv4(),
			description: "Completed task",
			created:
        "created " +
        formatDistanceToNow(new Date("2025-07-01T12:00:00"), {
        	addSuffix: true,
        }),
			completed: true,
			editing: false,
		},
		{
			id: uuidv4(),
			description: "Editing task",
			created:
        "created " +
        formatDistanceToNow(new Date("2025-07-01T12:00:00"), {
        	addSuffix: true,
        }),
			completed: false,
			editing: false,
		},
		{
			id: uuidv4(),
			description: "Active task",
			created:
        "created " +
        formatDistanceToNow(new Date("2025-07-01T12:00:00"), {
        	addSuffix: true,
        }),
			completed: false,
			editing: false,
		},
	]);

	const [currentFilter, setCurrentFilter] = useState("All");

	function onChangeFilter(newFilter) {
		setCurrentFilter(newFilter);
	};

  function deleteTask(taskId) {
    setTasks((prevTask) => 
      prevTask.filter((task) => 
        task.id !== taskId
      )
    );
  };

  function deleteTaskAllEnd() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

	const tasksListCount = tasks.filter((task) => !task.completed).length;

  function toggleCompleted(id) {
    setTasks(prevTask => 
      prevTask.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
      )
    );
  };

  function changeEditing(id) {
    setTasks(prevTask => 
      prevTask.map(task => 
        task.id === id ? {...task, editing: !task.editing} : task 
      )
    );
  };

  function changeDescrtiption(id, newDescription) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription, completed: true } : task
      )
    );
  }

  function newTask(description) {
    const task = {
      id: uuidv4(),
      description,
      created:
        "created " +
        formatDistanceToNow(new Date("2025-07-01T12:00:00"), {
          addSuffix: true,
        }),
      completed: false,
      editing: false,
    }

    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function handleSubmit(e) {
      e.preventDefault();
    }

	return (
		<>
      <form onSubmit={handleSubmit}>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm 
              onNewTask = {newTask}
            />
          </header>
          <section className="main">
            <TaskList tasks={
              currentFilter === 'All' 
                ? tasks : currentFilter === 'Active' 
                  ? tasks.filter((task) => !task.completed) 
                  : tasks.filter((task) => task.completed)
            } 
            onDelete={deleteTask} 
            onToggleCompleted={toggleCompleted}
            onEditing={changeEditing}
            onDescription={changeDescrtiption}
            />
          </section>
          <Footer
            tasksListCount = {tasksListCount}
            currentFilter = {currentFilter}
            onChangeFilter = {onChangeFilter}
            deleteTaskAllEnd = {deleteTaskAllEnd}
          />
        </section>
      </form>
		</>
	);
}

export default App;
