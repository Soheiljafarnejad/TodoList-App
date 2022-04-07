import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import style from "./TodoList.module.css";

import Todo from "../Todo/Todo";
import TodoEdit from "../TodoEdit/TodoEdit";

const TodoList = () => {
  const { todos } = useTodos();

  const { completedHandler, deleteHandler, editTodoHandler } = useTodosAction();

  const [selectedEdit, setSelectedEdit] = useState({ id: null });
  if (selectedEdit.id) {
    return (
      <TodoEdit
        selectedEdit={selectedEdit}
        setSelectedEdit={setSelectedEdit}
        editTodoHandler={editTodoHandler}
      />
    );
  }
  return (
    <section className={`container ${style.container}`}>
      <div className={style.header}>
        <h2>My Tasks</h2>
        <FaRegPlusSquare/>
      </div>
      {todos &&
        todos.map((todo) => {
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
