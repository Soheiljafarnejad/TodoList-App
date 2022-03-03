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
    valueCategoryHandler,
    setTodoList,
    setTodos,
    setCategory,
  } = useTodosAction();

  //re render when updated
  useEffect(() => {
    setTodoList(todos);
    filterCategoryHandler(statusCategory);
    filterStatusHandler(status);
    valueCategoryHandler(statusCategory.title);
  }, [todos, statusCategory, status]);

  // localStorage

  useEffect(() => {
    setCategory(JSON.parse(localStorage.getItem("category")) || category);
    setTodos(JSON.parse(localStorage.getItem("todos")) || todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, category]);

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
