import style from "./Todo.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={style.todo}>
      <h4
        onClick={onComplete}
        className={`${style.title} ${todo.isComplete && style.completed}`}
      >
        {todo.text}
      </h4>
      <div>
        <button className={style.btn} onClick={onEdit}>
          {<BiEdit />}
        </button>
        <button className={style.btn} onClick={onDelete}>
          {<BiTrashAlt />}
        </button>
      </div>
    </div>
  );
};

export default Todo;
