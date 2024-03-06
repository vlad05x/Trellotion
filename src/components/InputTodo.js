// InputTodo.js
import React, { useEffect, useState } from "react";

export const InputTodo = (props) => {
  const [listTitle, setListTitle] = useState("");
  const [inputTodoValue, setInputTodoValue] = useState("");
  const inputId = `inpTodo_${props.blockId}`;

  useEffect(() => {
    const storedListTitle =
      localStorage.getItem(`listTitle${props.blockId}`) || "";
    setListTitle(storedListTitle);
  }, [props.blockId]);

  useEffect(() => {
    localStorage.setItem(`listTitle${props.blockId}`, listTitle);
  }, [listTitle, props.blockId]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.addTask(props.blockId, inputTodoValue);
      setInputTodoValue("");
    }
  };

  const handleAddTask = () => {
    props.addTask(props.blockId, inputTodoValue);
    setInputTodoValue("");
  };

  return (
    <main className="">
      <div className="main__container">
        <div className="">
          <input
            className="Inpt_title"
            placeholder="Ввести заголовок списка"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
          <br />
          <input
            className="inpTodo"
            id={inputId}
            value={inputTodoValue}
            onChange={(e) => setInputTodoValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btnTodoAdd" onClick={handleAddTask}>
            Добавить карточку
          </button>
        </div>
      </div>
    </main>
  );
};
