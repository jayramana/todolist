import React from "react";
import "./index.css";
import { BsListTask } from "react-icons/bs";
const Header = () => {
  return (
    <nav>
      <header>
        <BsListTask  className="taskicon"/>
        <h1 className="title">Task Manager</h1>
      </header>
    </nav>
  );
};

export default Header;
