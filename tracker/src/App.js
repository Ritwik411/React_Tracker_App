import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      name: "A",
      id: 1,
      day: "Monday",
      reminder: true,
    },
    {
      name: "A",
      id: 2,
      day: "Tuesday",
      reminder: true,
    },
    {
      name: "A",
      id: 3,
      day: "Wednesday",
      reminder: true,
    },
  ]);
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
