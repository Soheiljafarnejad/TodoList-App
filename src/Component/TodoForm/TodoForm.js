import { useState } from "react";

const TodoForm = ({ addTodosHandler }) => {
  const [inputValue, setInputValue] = useState("");
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
      <form onSubmit={submitHandler}>
        <input onChange={inputHandler} type="text" value={inputValue} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
