/* eslint-disable react-hooks/exhaustive-deps */
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
// import { useEffect } from "react";
// import { useTodos, useTodosAction } from "./Context/TodoContext";
import CategoryList from "./CategoryList/CategoryList";

const TodoApp = () => {
  // const { todos, status, category, categoryList } = useTodos();

  // const {
  //   filterCategoryHandler,
  //   filterStatusHandler,
  //   valueCategoryHandler,
  //   setTodoList,
  //   setTodos,
  //   setCategoryList,
  // } = useTodosAction();

  // //re render when updated
  // useEffect(() => {
  //   setTodoList(todos);
  //   filterCategoryHandler(category);
  //   filterStatusHandler(status);
  //   valueCategoryHandler(category.title);
  // }, [todos, category, status]);

  // // localStorage

  // useEffect(() => {
  //   setCategoryList(JSON.parse(localStorage.getItem("category")));
  //   setTodos(JSON.parse(localStorage.getItem("todos")));
  // }, []);
  
  // useEffect(() => {
  //   localStorage.setItem("category", JSON.stringify(categoryList));
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos, categoryList]);
  
  return (
    <>
      <CategoryList />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoApp;
