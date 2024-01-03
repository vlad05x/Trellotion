// TodoContainer.js
import React from "react";
import { InputTodo } from "./InputTodo";
import { TaskTodo } from "./TaskTodo";

const TodoContainer = (props) => {
  return (
    <div className="main">
        <div className="main__container">
            <div className="main_content">
              <InputTodo {...props} />
              {props.tasks.map((task) => (
                <TaskTodo key={task.id} {...task} {...props} />
              ))}
            </div>
        </div>
    </div>
  );
};

export default TodoContainer;
