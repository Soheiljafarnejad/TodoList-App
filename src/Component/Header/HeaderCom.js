import style from "./HeaderCom.module.css";
import { RiSearchLine } from "react-icons/ri";
import { useTodos, useTodosAction } from "../Context/TodoContext";
const HeaderCom = () => {
  const { searchValue } = useTodos();
  const { searchHandler } = useTodosAction();
  return (
    <header className={`container ${style.header}`}>
      <div>
        <input
          value={searchValue}
          onChange={(e) => searchHandler(e)}
          type="text"
          placeholder="I'm searching for..."
        />
      </div>
      <RiSearchLine />
    </header>
  );
};

export default HeaderCom;
