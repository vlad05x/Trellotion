import React from "react";
import { useSelector } from "react-redux";

const Boards = () => {
    const username = useSelector((state) => state.auth.username); 

    return (
        <>
            <h1>Boards</h1>
            <h1>Welcome to Boards, {username}</h1>
        </>
    );
};

export default Boards;
