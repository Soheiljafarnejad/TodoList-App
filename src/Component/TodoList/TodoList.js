import { useState } from "react";

import Todo from "../Todo/Todo";
import TodoEdit from "../TodoForm/TodoEdit";

const TodoList = ({
  todos,
  completedHandler,
  deleteHandler,
  editTodoHandler,
}) => {
  const [selectedEdit, setSelectedEdit] = useState({ id: null });

  if (selectedEdit.id) {
    return (
      <TodoEdit
        edit={selectedEdit}
        editTodoHandler={editTodoHandler}
        deleteHandler={deleteHandler}
      />
    );
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
