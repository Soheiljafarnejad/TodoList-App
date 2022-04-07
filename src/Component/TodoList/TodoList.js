import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import Modal from "../../common/Modal/Modal";
import style from "./TodoList.module.css";
import TodoAdd from "../TodoAdd/TodoAdd";

import Todo from "../Todo/Todo";
import TodoEdit from "../TodoEdit/TodoEdit";

const TodoList = () => {
  const [toggle, setToggle] = useState({ type: "" });
  const { todos } = useTodos();
  const [editValue, setEditValue] = useState();
  const { completedHandler, deleteHandler, editTodoHandler } = useTodosAction();

  const onEdit = (value) => {
    console.log(value);
    setEditValue(value);
    setToggle({ type: "edit" });
  };

  const toggleHandler = () => {
    setToggle({ type: "add" });
  };

  return (
    <section className={`container ${style.todoList}`}>
      <div className={style.header}>
        <h2>My Tasks</h2>
        <FaRegPlusSquare className="icons" onClick={toggleHandler} />
        {toggle.type === "add" && (
          <Modal>
            <TodoAdd setToggle={setToggle} />
          </Modal>
        )}
        {toggle.type === "edit" && (
          <Modal>
            <TodoEdit
              setToggle={setToggle}
              value={editValue}
              setValue={setEditValue}
            />
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
              onEdit={() => onEdit(todo)}
            />
          );
        })}
    </section>
  );
};

export default TodoList;
