import style from "./HeaderCom.module.css";

const HeaderCom = () => {

  return (
    <header className={`container ${style.container}`}>
      <h1 className={style.title}>TodoList App</h1>
    </header>
  );
};

export default HeaderCom;
