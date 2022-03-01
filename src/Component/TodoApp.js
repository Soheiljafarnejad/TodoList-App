import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoSelect from "./TodoSelect/TodoSelect";
import TodoCategory from "./TodoCategory/TodoCategory";
import { useEffect } from "react";
import {
  useStatus,
  useTodoListAction,
  useTodos,
  useTodosAction,
} from "./Context/TodoContext";

const TodoApp = () => {
  const { filterTodoHandler } = useTodosAction();
  const setFiltered = useTodoListAction();
  const todos = useTodos();
  const status = useStatus();

  useEffect(() => {
    setFiltered(todos);
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
