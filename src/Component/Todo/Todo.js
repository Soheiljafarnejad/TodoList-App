import style from "./Todo.module.css";
const Todo = ({ todo, onComplete }) => {
  return (
    <div className={style.todo}>
      <h4 className={`${todo.isComplete && style.completed}`}>{todo.text}</h4>
      <div>
        <button>Edit</button>
        <button onClick={onComplete}>
          {todo.isComplete ? "unComplete" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
