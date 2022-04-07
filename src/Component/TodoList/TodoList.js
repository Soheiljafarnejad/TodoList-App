import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import Modal from "../../common/Modal/Modal";
import style from "./TodoList.module.css";
import TodoAdd from "../TodoAdd/TodoAdd";

import Todo from "../Todo/Todo";
import TodoEdit from "../TodoEdit/TodoEdit";

const TodoList = () => {
  const [toggle, setToggle] = useState();
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
  const toggleHandler = () => {
    setToggle(true);
  };

  return (
    <section className={`container ${style.todoList}`}>
      <div className={style.header}>
        <h2>My Tasks</h2>
        <FaRegPlusSquare onClick={toggleHandler} />
        {toggle && (
          <Modal>
            <TodoAdd setToggle={setToggle} />
          </Modal>
        )}
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
