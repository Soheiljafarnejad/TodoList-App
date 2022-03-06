import style from "./HeaderCom.module.css";
import { BiSearch } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { useTodosAction } from "../Context/TodoContext";

const HeaderCom = ({ setToggle }) => {
  const { searchHandler } = useTodosAction();
  const [isSearch, setIsSearch] = useState(false);

  const searchValue = (e) => {
    searchHandler(e.target.value);
  };
  const onSearch = () => {
    setIsSearch(!isSearch);
  };

  const onClickMenu = () => {
    setToggle(true);
  };
  return (
    <header className={`container ${style.container}`}>
      <div className={style.nav}>
        <BiMenuAltLeft onClick={onClickMenu} className="iconsBig" />
        <div className={style.searchBar}>
          {isSearch && (
            <input
              onChange={searchValue}
              className={style.search}
              type="text"
              autoFocus={true}
              placeholder="search..."
            />
          )}
          <BiSearch onClick={onSearch} className="iconsBig" />
        </div>
      </div>
      <h1 className={style.title}>TodoList App</h1>
    </header>
  );
};

export default HeaderCom;
