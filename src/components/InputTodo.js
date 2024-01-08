import React, { useEffect, useState } from "react";

export const InputTodo = (props) => {
  const [listTitle, setListTitle] = useState("");

  useEffect(() => {
    const storedListTitle = localStorage.getItem("listTitle") || "";
    setListTitle(storedListTitle);
  }, []);

  useEffect(() => {
    localStorage.setItem("listTitle", listTitle);
  }, [listTitle]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.addTask();
    }
  }

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
          <button className="btnTodoAdd" onClick={() => props.addTask()}>Добавить карточку</button>
        </div>
      </div>
    </main>
  );
};
