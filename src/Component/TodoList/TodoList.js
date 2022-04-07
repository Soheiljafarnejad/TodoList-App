import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import Modal from "../../common/Modal/Modal";
import style from "./TodoList.module.css";
import Todo from "../Todo/Todo";
import TodoEdit from "../TodoEdit/TodoEdit";

const TodoList = () => {
  const [toggle, setToggle] = useState();
  const [editValue, setEditValue] = useState();
  const { completedHandler, deleteHandler } = useTodosAction();
  const { todos } = useTodos();

  const onEdit = (e, value) => {
    e.stopPropagation();
    console.log(value);
    setEditValue(value);
    setToggle(true);
  };
  
  return (
    <section className={`container ${style.todoList}`}>
      <div className={style.header}>
        <h2>My Tasks</h2>
        {toggle && (
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
              onComplete={(e) => completedHandler(e, todo.id)}
              onDelete={(e) => deleteHandler(e, todo.id)}
              onEdit={(e) => onEdit(e, todo)}
            />
          );
        })}
    </section>
  );
};

export default TodoList;
