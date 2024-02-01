// TodoContainer.js
import React from "react";
import { InputTodo } from "./InputTodo";
import { TaskTodo } from "./TaskTodo";
import { IoCloseCircleSharp } from "react-icons/io5";

const TodoContainer = (props) => {
  const handleDeleteBlock = () => {
    props.deleteBlock(props.blockId);
  };
  return (
    <div className="main">
      <div className="main__container">
          <div className="main_content">
            <IoCloseCircleSharp
              className="iconCloseBlock "
              onClick={handleDeleteBlock}
            />
            <InputTodo {...props} blockId={props.blockId} />
            {props.tasks.map((task) => (
              <TaskTodo key={task.id} {...task} {...props} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default TodoContainer;
