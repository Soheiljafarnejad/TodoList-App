import { useState } from "react";
import style from "./TodoForm.module.css";

const TodoForm = ({ addTodosHandler }) => {
  const [inputValue, setInputValue] = useState("");
  const [focus, setFocus] = useState(false);
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("add todo !");
      return;
    }
    addTodosHandler(inputValue);
    setInputValue("");
  };

  return (
    <section>
      <h2>Do you add anything?</h2>
      <form onSubmit={submitHandler} className={style.form}>
        <input
          className={style.input}
          onChange={inputHandler}
          type="text"
          value={inputValue}
          placeholder="add task..."
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <button
          className={`${style.btn} ${focus && style.btnFocus}`}
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
