import { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const inputHandler = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={inputHandler} type="text" value={todo} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
