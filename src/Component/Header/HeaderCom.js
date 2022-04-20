import style from "./HeaderCom.module.css";
import { RiSearchLine } from "react-icons/ri";
import { searchTodo, useTodos, useTodosAction } from "../Context/TodoContext";
const HeaderCom = () => {
  const { searchValue } = useTodos();
  const dispatch = useTodosAction();
  return (
    <header className={`container ${style.header}`}>
      <div>
        <input
          value={searchValue}
          onChange={(e) => dispatch(searchTodo(e.target.value))}
          type="text"
          placeholder="I'm searching for..."
        />
      </div>
      <RiSearchLine />
    </header>
  );
};

export default HeaderCom;
