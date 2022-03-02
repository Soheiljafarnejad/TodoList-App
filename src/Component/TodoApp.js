import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoSelect from "./TodoSelect/TodoSelect";
import { useEffect } from "react";
import { useTodos, useTodosAction } from "./Context/TodoContext";
import CategoryList from "./CategoryList/CategoryList";
import CategoryContext from "./Context/CategoryContext";

const TodoApp = () => {
  const { filterTodoHandler, updateTodoHandler } = useTodosAction();
  const { todos, status } = useTodos();

  useEffect(() => {
    updateTodoHandler(todos);
    filterTodoHandler(status);
  }, [todos, status]);

  return (
    <>
      <CategoryContext>
        <CategoryList />
      </CategoryContext>
      <TodoForm />
      <TodoSelect />
      <TodoList />
    </>
  );
};

export default TodoApp;
