import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoSelect from "./TodoSelect/TodoSelect";
import { useEffect } from "react";
import { useTodos, useTodosAction } from "./Context/TodoContext";
import CategoryList from "./CategoryList/CategoryList";

const TodoApp = () => {
  const { todos, status, statusCategory, category } = useTodos();

  const {
    filterCategoryHandler,
    filterStatusHandler,
    setTodoList,
    setTodos,
    setCategory,
  } = useTodosAction();

  //re render when updated
  useEffect(() => {
    setTodoList(todos);
    filterCategoryHandler(statusCategory);
    filterStatusHandler(status);
  }, [todos, statusCategory, status]);

  // localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("category", JSON.stringify(category));
  }, [todos, category]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    setCategory(JSON.parse(localStorage.getItem("category")) || []);
  }, []);

  return (
    <>
      <CategoryList />
      <TodoForm />
      <TodoSelect />
      <TodoList />
    </>
  );
};

export default TodoApp;
