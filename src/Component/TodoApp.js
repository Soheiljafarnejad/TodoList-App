import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoSelect from "./TodoSelect/TodoSelect";
import TodoCategory from "./TodoCategory/TodoCategory";
import { useEffect } from "react";
import { useTodos, useTodosAction } from "./Context/TodoContext";

const TodoApp = () => {
  const { filterTodoHandler,updateTodoHandler  } = useTodosAction();
  const { todos, status } = useTodos();

  useEffect(() => {
    updateTodoHandler(todos);
    filterTodoHandler(status);
  }, [todos, status]);

  return (
    <>
      <TodoCategory />
      <TodoForm />
      <TodoSelect />
      <TodoList />
    </>
  );
};

export default TodoApp;
