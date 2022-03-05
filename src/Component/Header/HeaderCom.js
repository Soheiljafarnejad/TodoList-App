import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useTodosAction } from "../Context/TodoContext.js";
import style from "./HeaderCom.module.css";

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
      <section className={style.header}>
        <div className={style.nav}>
          <BiMenu onClick={onClickMenu} className="iconsBig" />
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
            <BiSearchAlt onClick={onSearch} className="iconsBig" />
          </div>
        </div>
        <h1 className={style.title}>Todo List App</h1>
      </section>
    </header>
  );
};

export default HeaderCom;
