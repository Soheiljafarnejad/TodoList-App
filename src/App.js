import TodoApp from "./Component/TodoApp";
import "./App.css";
import HeaderCom from "./Component/Header/HeaderCom";
import TodoContext from "./Component/Context/TodoContext";
import { useState } from "react";

const App = () => {
  return (
    <>
      <TodoContext>
        <HeaderCom />
        <TodoApp />
      </TodoContext>
    </>
  );
};

export default App;
