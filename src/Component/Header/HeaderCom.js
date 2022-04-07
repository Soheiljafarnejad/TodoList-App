import style from "./HeaderCom.module.css";
import { RiSearchLine } from "react-icons/ri";
const HeaderCom = () => {
  return (
    <header className={`container ${style.header}`}>
      <div>

      <input type="text" placeholder="I'm searching for..." />
      </div>
      <RiSearchLine />
    </header>
  );
};

export default HeaderCom;
