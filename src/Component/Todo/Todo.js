import style from "./Todo.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useState } from "react";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(!show);
  };
  return (
    <div className={style.todo} onClick={clickHandler}>
      <div className={style.body}>
        <div className={style.title} onClick={onComplete}>
          <TiTick
            className={`${style.check} ${`check-${todo.color}`} ${
              todo.isComplete && `${todo.color}-completed`
            }`}
          />
          <h4 className={`${todo.isComplete && style.completed}`}>
            {todo.title}
          </h4>
        </div>
        <div className={`${style.description} ${show ? style.show : ""}`}>
          <span>{todo.description}</span>
        </div>
      </div>
      <div className={style.btnContainer}>
        <BiEdit className={`icons ${style.btn}`} onClick={onEdit} />
        <BiTrashAlt className={`icons ${style.btn}`} onClick={onDelete} />
      </div>
    </div>
  );
};

export default Todo;
