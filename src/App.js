import TodoApp from "./Component/TodoApp";
import "./App.css";
import HeaderCom from "./Component/Header/HeaderCom";
import TodoContext from "./Component/Context/TodoContext";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <section className="app">
      <nav className="nav"></nav>
      <main className="main">
        {/* <TodoContext>
          <HeaderCom />
          <TodoApp />
        </TodoContext>
      <Toaster /> */}
      </main>
    </section>
  );
};

export default App;
