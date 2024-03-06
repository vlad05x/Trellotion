// App.js
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [blocks, setBlocks] = useState(() => {
    const storedBlocks = JSON.parse(localStorage.getItem("blocks")) || [
      { id: 1, tasks: [] },
    ];
    return storedBlocks;
  });

  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

const addBlock = () => {
  const newBlock = {
    id: uuidv4(),
    tasks: [],
  };
  setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
};

  const addTask = (blockId, inputTodoValue) => {
    const taskTodo = {
      id: uuidv4(),
      text: inputTodoValue,
      status: false,
    };
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === blockId
          ? { ...block, tasks: [taskTodo, ...block.tasks] }
          : block
      )
    );
    setTodo("");
  };

  const deleteTask = (blockId, taskId) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === blockId
          ? {
              ...block,
              tasks: block.tasks.filter((task) => task.id !== taskId),
            }
          : block
      )
    );
  };

  const deleteBlock = (blockId) => {
    setBlocks((prevBlocks) =>
      prevBlocks.filter((block) => block.id !== blockId)
    );
  };

  const toggleTask = (blockId, taskId) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === blockId
          ? {
              ...block,
              tasks: block.tasks.map((task) =>
                task.id === taskId ? { ...task, status: !task.status } : task
              ),
            }
          : block
      )
    );
  };
  

  return (
    <div className="App">
      <Header />
      <div className="main_box"> 
      <div className="btn_content">
        <button className="btnBlockAdd" onClick={addBlock}>
          Добавить блок
        </button>
      </div>
         
        {blocks.map((block) => (
          <TodoContainer
            key={block.id}
            blockId={block.id}
            tasks={block.tasks}
            todo={todo}
            setTodo={setTodo}
            addTask={addTask}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            deleteBlock={deleteBlock}
            addBlock={addBlock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
