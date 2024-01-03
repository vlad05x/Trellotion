import React from "react";

export const InputTodo = (props) => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="">
            <input className="inpTodo"
              value={props.todo}
              onChange={(e) => props.setTodo(e.target.value)}
            />
            <button className="btnTodoAdd" onClick={() => props.addTask()}>Добавить</button>
        </div>
      </div>
    </main>
  );
};
