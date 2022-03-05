import { useState, useRef } from "react";
import style from "./TodoForm.module.css";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import toast, { Toaster } from "react-hot-toast";

const TodoForm = () => {
  const { category,categoryList } = useTodos();
  const { addTodosHandler } = useTodosAction();
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    inputRef.current.focus();
    e.preventDefault();
    if (inputValue === "") {
      toast.error("enter a new task");
      return;
    }
    if (categoryList.length === 1) {
      toast.error("create a new category");
      return;
    }
    if (category.title === "All") {
      toast.error("select a category");
      return;
    }
    addTodosHandler(inputValue);
    setInputValue("");
  };

  return (
    <section className="container">
      <h2>Do you add anything?</h2>
      <form onSubmit={submitHandler} className={style.form}>
        <input
          onChange={inputHandler}
          type="text"
          value={inputValue}
          placeholder="add task..."
          ref={inputRef}
        />
        <button className={`${style.btn}`} type="submit">
          Add
        </button>
        <Toaster />
      </form>
    </section>
  );
};

export default TodoForm;
