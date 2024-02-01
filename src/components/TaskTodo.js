// TaskTodo.js
import React from "react";
import { MdClose } from "react-icons/md";

export const TaskTodo = (props) => {
  return (
    <div className="task__container">
      <div key={props.id} className="task_content">
        <input
          className="intFlag"
          type={"checkbox"}
          onClick={() => props.toggleTask(props.blockId, props.id)}
          defaultChecked={props.status}
        ></input>
        <p
          className="textInpt"
          style={
            props.status
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {props.text}
        </p>
        <button
          className="btnDel"
          onClick={() => props.deleteTask(props.blockId, props.id)}
        >
          <MdClose className="iconClose" />
        </button>
      </div>
    </div>
  );
};
