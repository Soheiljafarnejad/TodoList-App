import { useState } from "react";

import Todo from "../Todo/Todo";
import TodoEdit from "../TodoForm/TodoEdit";
import TodoSelect from "../TodoSelect/TodoSelect";

const TodoList = ({
  todos,
  completedHandler,
  deleteHandler,
  editTodoHandler,
  filterTodoHandler,
  setStatus,
  status,
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
    <section>
      <h2>Today's Tasks</h2>
      <TodoSelect
        filterTodoHandler={filterTodoHandler}
        status={status}
        setStatus={setStatus}
      />
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
