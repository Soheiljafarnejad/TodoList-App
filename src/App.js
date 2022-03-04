import TodoApp from "./Component/TodoApp";
import "./App.css";
import HeaderCom from "./Component/Header/HeaderCom";
import TodoContext from "./Component/Context/TodoContext";
import NavBar from "./Component/NavBar/Navbar";
import { useState } from "react";
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
