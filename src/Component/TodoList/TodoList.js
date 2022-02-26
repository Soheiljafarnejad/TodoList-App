import { useTodos, useTodosAction } from "../Context/TodoContext/TodoContext";
import Todo from "../Todo/Todo";
const TodoList = () => {
  const todos = useTodos();
  const { completedHandler } = useTodosAction();
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => completedHandler(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
