import style from "./Todo.module.css";
const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={style.todo}>
      <h4 className={`${todo.isComplete && style.completed}`}>{todo.text}</h4>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onComplete}>
          {todo.isComplete ? "unComplete" : "Complete"}
        </button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
