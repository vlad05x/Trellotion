// App.js
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
 

  // LocalStorge for save list
  useEffect(() => {
    const saveTask = JSON.parse(localStorage.getItem("items")) || [];
    setTasks(saveTask);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const taskTodo = {
      id: Math.random(),
      text: todo,
      status: false,
    };
    let newTask = [taskTodo, ...tasks];
    setTasks(newTask);
    setTodo("");
  };

  const deleteTask = (id) => {
    let del = tasks.filter((e) => e.id !== id);
    setTasks(del);
  };

  const toggleTask = (id) => {
    let toggle = tasks.map((e) =>
      e.id === id ? { ...e, status: !e.status } : { ...e }
    );
    setTasks(toggle);
  };

  return (
    <div className="App">
      <Header />
      <TodoContainer
        tasks={tasks}
        todo={todo}
        setTodo={setTodo}
        addTask={addTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
