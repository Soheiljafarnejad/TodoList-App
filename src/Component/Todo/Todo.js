import style from "./Todo.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={style.todo}>
      <div>
        <div className={style.description}>
          <h4
            onClick={onComplete}
            className={`${style.title} ${`radio-${todo.color}`} ${
              todo.isComplete &&
              `radio-${todo.color}-completed ${style.completed}`
            }`}
          >
            {todo.text}
          </h4>
        </div>
        <span className={style.category}>{todo.category}</span>
      </div>
      <div className={style.btnContainer}>
        <BiEdit
          className={`icons ${style.btn}`}
          data-tip={"Edit"}
          data-class="tooltip"
          onClick={onEdit}
        />

        <BiTrashAlt
          className={`icons ${style.btn}`}
          data-tip={"Delete"}
          data-class="tooltip"
          onClick={onDelete}
        />

        <ReactTooltip />
      </div>
    </div>
  );
};

export default Todo;
