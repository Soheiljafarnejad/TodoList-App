import { useState } from "react";

import Todo from "../Todo/Todo";
import TodoEdit from "../TodoForm/TodoEdit";
import TodoForm from "../TodoForm/TodoForm";

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
  if (todos.length === 0) {
    return <h2>There is nothing to do !</h2>;
  }
  return (
    <section>
      <h2>Today's Tasks</h2>
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
    </section>
  );
};

export default TodoList;
