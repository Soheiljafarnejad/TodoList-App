import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

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
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
