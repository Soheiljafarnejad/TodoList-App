import { BiSearchAlt } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiBell } from "react-icons/bi";

import style from"./HeaderCom.module.css"

const HeaderCom = () => {
  return (
    <header className={style.header}>
      <div className={style.icons}>
      <BiMenu />
      <div>
      <BiSearchAlt className={style.search} />
      <BiBell />
      </div>
      </div>
      <h1>What's up joy!</h1>
    </header>
  );
};

export default HeaderCom;
