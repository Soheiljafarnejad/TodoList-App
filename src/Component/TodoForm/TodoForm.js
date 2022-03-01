import { useRef, useState } from "react";
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
    <div>
      <form onSubmit={submitHandler} className={style.form}>
        <input
          className={style.input}
          onChange={inputHandler}
          type="text"
          value={inputValue}
          placeholder="add todo..."
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
    </div>
  );
};

export default TodoForm;
