import style from "./HeaderCom.module.css";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { useTodosAction } from "../Context/TodoContext";
const HeaderCom = () => {
  const [value, setValue] = useState("");
  const { searchHandler } = useTodosAction();
  const changeHandler = (e) => {
    setValue(e.target.value);
    searchHandler(e.target.value);
  };
  return (
    <header className={`container ${style.header}`}>
      <div>
        <input
          value={value}
          onChange={changeHandler}
          type="text"
          placeholder="I'm searching for..."
        />
      </div>
      <RiSearchLine />
    </header>
  );
};

export default HeaderCom;
