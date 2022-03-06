import TodoApp from "./Component/TodoApp";
import "./App.css";
import HeaderCom from "./Component/Header/HeaderCom";
import TodoContext from "./Component/Context/TodoContext";
import { useState } from "react";
import NavBar from "./Component/NavBar/Navbar";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <TodoContext>
        {toggle && <NavBar setToggle={setToggle} />}

        <HeaderCom setToggle={setToggle} />
        <TodoApp />
      </TodoContext>
    </>
  );
};

export default App;
