import HeaderCom from "./Component/Header/HeaderCom";
import TodoList from "./Component/TodoList/TodoList";
import CategoryList from "./Component/CategoryList/CategoryList";
import TodoContext from "./Component/Context/TodoContext";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <main className="main">
      <TodoContext>
        <HeaderCom />
        <CategoryList />
        <TodoList />
      </TodoContext>
      <Toaster />
    </main>
  );
};

export default App;
