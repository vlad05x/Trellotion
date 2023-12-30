import { useState } from "react";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { TaskTodo } from "./components/TaskTodo";

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskTodo = {
      id: Math.random(),
      text: todo,
      status: false,
    };
    let newTask = [taskTodo, ...tasks];
    setTasks(newTask);
    setTodo("")
  };

  const deleteTask = (id) => {
      let del = tasks.filter(e => e.id !== id)
      setTasks(del)
  };

  const toggleTask = (id) => {
    let toggle = tasks.map(e => e.id === id ? {...e, status : !e.status } : {...e})
    setTasks(toggle)
  };

  const taskTodoList = tasks.map((e) => (
    <TaskTodo id={e.id} text={e.text} status={e.status} deleteTask={deleteTask} toggleTask={toggleTask} />
  ));
  return (
    <div className="App">
      <Header />
      <InputTodo addTask={addTask} todo={todo} setTodo={setTodo} />
      {taskTodoList}
    </div>
  );
}

export default App;
