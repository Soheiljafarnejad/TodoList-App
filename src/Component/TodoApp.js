import TodoContext from "./Context/TodoContext/TodoContext";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const TodoApp = () => {
  return (
    <div>
      <TodoContext>
        <TodoForm />
        <TodoList />
      </TodoContext>
    </div>
  );
};

export default TodoApp;
