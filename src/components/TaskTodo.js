import React from "react";

export const TaskTodo = (props) => {
    return (
        <div key={props.id}>
            <input type={"checkbox"} onClick={() => props.toggleTask(props.id)} defaultChecked={props.status}></input>
            <p style={props.status ? {textDecoration: "line-through"} : {textDecoration: "none"} }>{props.text}</p>
            <button onClick={() => props.deleteTask(props.id) }>X</button>
        </div>
    )
}

