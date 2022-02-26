import style from "./Todo.module.css";
const Todo = ({ todo }) => {
  return (
    <div className={style.todo}>
      <h4>{todo.text}</h4>
      <div>
        <button>Edit</button>
        <button>Complete</button>
      </div>
    </div>
  );
};

export default Todo;
