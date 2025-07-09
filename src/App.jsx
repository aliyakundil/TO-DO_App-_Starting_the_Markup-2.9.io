import "./App.css";
import { formatDistanceToNow } from "date-fns";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Установить пакет npm install date-fns

function App() {
	const tasks = [
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
			editing: true,
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
	];

	const [currentFilter, setCurrentFilter] = useState("All");

	function onChangeFilter(newFilter) {
		setCurrentFilter(newFilter);
	}

	const tasksListCount = tasks.filter((task) => !task.completed).length;

	return (
		<>
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<NewTaskForm />
				</header>
				<section className="main">
					<TaskList tasks={tasks} />
				</section>
				<Footer
					tasksListCount={tasksListCount}
					currentFilter={currentFilter}
					onChangeFilter={onChangeFilter}
				/>
			</section>
		</>
	);
}

export default App;
