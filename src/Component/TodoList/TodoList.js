import { useState } from "react";
import { useTodos, useTodosAction } from "../Context/TodoContext";

import Todo from "../Todo/Todo";
import TodoEdit from "../TodoForm/TodoEdit";

const TodoList = () => {
  const { todoList } = useTodos();

  const { completedHandler, deleteHandler, editTodoHandler } = useTodosAction();

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
  if (todoList.length === 0) {
    return (
      <section className="container">
        <h2>There is nothing to do !</h2>
      </section>
    );
  }
  return (
    <section className="container">
      <h2>Today's Tasks</h2>
      {todoList.map((todo) => {
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
