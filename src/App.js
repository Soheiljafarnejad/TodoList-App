import TodoApp from "./Component/TodoApp";
import "./App.css";
import HeaderCom from "./Component/Header/HeaderCom";
const App = () => {
  return (
    <div className="container">
      <HeaderCom/>
      <TodoApp />
    </div>
  );
};

export default App;
