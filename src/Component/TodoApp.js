import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoSelect from "./TodoSelect/TodoSelect";

import { useState, useEffect } from "react";
import TodoCategory from "./TodoCategory/TodoCategory";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    setFiltered(todos);
    filterTodoHandler(status);
  }, [todos, status]);

  const addTodosHandler = (value) => {
    const newTodo = {
      text: value,
      id: Math.floor(Math.random() * 100000),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completedHandler = (id) => {
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    const selectTodo = { ...todos[index] };
    selectTodo.isComplete = !selectTodo.isComplete;
    const cloneTodo = [...todos];
    cloneTodo[index] = selectTodo;
    setTodos(cloneTodo);
  };

  const deleteHandler = (id) => {
    const deletedTodo = todos.filter((item) => item.id !== id);
    setTodos(deletedTodo);
  };

  const editTodoHandler = (id, value) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectTodo = { ...todos[index] };
    selectTodo.text = value;
    const cloneTodo = [...todos];
    cloneTodo[index] = selectTodo;
    setTodos(cloneTodo);
  };

  const filterTodoHandler = (value) => {
    switch (value) {
      case "All": {
        return setFiltered(todos);
      }
      case "Completed": {
        const selectItem = todos.filter((item) => item.isComplete);
        return setFiltered(selectItem);
      }
      case "Uncompleted": {
        const selectItem = todos.filter((item) => !item.isComplete);
        return setFiltered(selectItem);
      }
      default:
        return setFiltered(todos);
    }
  };

  return (
    <div>
      <TodoCategory />
      <TodoForm addTodosHandler={addTodosHandler} />
      <TodoSelect
        filterTodoHandler={filterTodoHandler}
        setStatus={setStatus}
        status={status}
      />
      <TodoList
        todos={filtered}
        completedHandler={completedHandler}
        deleteHandler={deleteHandler}
        editTodoHandler={editTodoHandler}
      />
    </div>
  );
};

export default TodoApp;
