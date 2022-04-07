import style from "./TodoForm.module.css";
const TodoForm = ({ submitHandler, onChange, value }) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <input
        onChange={onChange}
        type="text"
        value={value}
        placeholder="add new task"
      />
      <button className={style.submit} type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
