import { useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useTodosAction } from "../Context/TodoContext.js";
import style from "./HeaderCom.module.css";

const HeaderCom = () => {
  const { searchHandler } = useTodosAction();
  const [isSearch, setIsSearch] = useState(false);

  const onSearch = (e) => {
    searchHandler(e.target.value);
  };

  const clickHandler = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header className="container">
      <section className={style.header}>
        <div className={style.icons}>
          <BiMenu />
          <div className={style.searchBar}>
            {isSearch && (
              <input
                onChange={onSearch}
                className={style.search}
                type="text"
                autoFocus={true}
                placeholder="search..."
              />
            )}
            <BiSearchAlt onClick={clickHandler} className={style.iconSearch} />
          </div>
        </div>
        <h1 className={style.title}>What's up joy!</h1>
      </section>
    </header>
  );
};

export default HeaderCom;
