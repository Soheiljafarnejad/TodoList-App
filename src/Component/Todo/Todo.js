import style from "./Todo.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import { TiTick } from "react-icons/ti";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={style.todo}>
      <div>
        <div className={style.description} onClick={onComplete}>
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
