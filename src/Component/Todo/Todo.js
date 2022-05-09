import style from "./Todo.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useState } from "react";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  const [show, setShow] = useState(false);
  const clickHandler = (e) => {
    onComplete(e);
    setShow(false);
  };
  return (
    <div className={style.todo}>
      <div className={style.body}>
        <div className={style.titleBox} onClick={clickHandler}>
          <TiTick
            className={`${style.check} ${`check-${todo.color}`} ${
              todo.isComplete && `${todo.color}-completed`
            }`}
          />
          <h4
            className={`${style.title} ${todo.isComplete && style.completed}`}
          >
            {todo.title}
          </h4>
        </div>
        <div className={style.completeBox} onClick={() => setShow(!show)}></div>
        <div className={style.btnContainer}>
          <BiEdit className={`icons ${style.btn}`} onClick={onEdit} />
          <BiTrashAlt className={`icons ${style.btn}`} onClick={onDelete} />
        </div>
      </div>
      <div className={`${style.description} ${show ? style.show : ""}`}>
        <p>{todo.title}</p>
        <span>{todo.description}</span>
      </div>
    </div>
  );
};

export default Todo;
