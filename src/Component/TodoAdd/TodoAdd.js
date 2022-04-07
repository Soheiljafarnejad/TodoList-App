import { useState, useRef } from "react";
import style from "./TodoAdd.module.css";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import toast from "react-hot-toast";
import TodoForm from "../../common/TodoForm/TodoForm";

const TodoAdd = () => {
  const { categoryList } = useTodos();
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
    addTodosHandler(inputValue);
    setInputValue("");
  };

  return (
    <section className="container">
        <button className={style.add}>Add a new task...</button>
      {/* <TodoForm /> */}
    </section>
  );
};

export default TodoAdd;
