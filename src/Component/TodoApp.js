import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodosHandler = (value) => {
    const newTodo = {
      text: value,
      id: Math.floor(Math.random() * 100000),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <TodoForm addTodosHandler={addTodosHandler} />
      <TodoList />
    </div>
  );
};

export default TodoApp;
