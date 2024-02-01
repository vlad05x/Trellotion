// InputTodo.js
import React, { useEffect, useState } from "react";

export const InputTodo = (props) => {
  const [listTitle, setListTitle] = useState("");

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
      props.addTask(props.blockId);
    }
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
            value={props.todo}
            onChange={(e) => props.setTodo(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="btnTodoAdd"
            onClick={() => props.addTask(props.blockId)}
          >
            Добавить карточку
          </button>
        </div>
      </div>
    </main>
  );
};
