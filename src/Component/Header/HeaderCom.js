import { BiSearchAlt } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiBell } from "react-icons/bi";

import style from"./HeaderCom.module.css"

const HeaderCom = () => {
  return (
    <div className={style.header}>
      <div className={style.icons}>
      <BiMenu />
      <div>
      <BiSearchAlt className={style.search} />
      <BiBell />
      </div>
      </div>
      <h2>What's up joy!</h2>
    </div>
  );
};

export default HeaderCom;
