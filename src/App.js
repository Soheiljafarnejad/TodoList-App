import TodoApp from "./Component/TodoApp";
import "./App.css";
import HeaderCom from "./Component/Header/HeaderCom";
import TodoContext from "./Component/Context/TodoContext";
const App = () => {
  return (
    <>
      <HeaderCom />
      <TodoContext>
        <TodoApp />
      </TodoContext>
    </>
  );
};

export default App;
