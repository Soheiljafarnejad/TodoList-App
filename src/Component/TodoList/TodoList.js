import { useState } from "react";
import { useTodos, useTodosAction } from "../Context/TodoContext/TodoContext";
import Todo from "../Todo/Todo";
import TodoEdit from "../TodoForm/TodoEdit";
const TodoList = () => {
  const todos = useTodos();
  const { completedHandler, deleteHandler } = useTodosAction();

  const [selectedEdit, setSelectedEdit] = useState({ id: null });

  if (selectedEdit.id) {
    return <TodoEdit edit={selectedEdit} />;
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => completedHandler(todo.id)}
            onDelete={() => deleteHandler(todo.id)}
            onEdit={() => setSelectedEdit(todo)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
