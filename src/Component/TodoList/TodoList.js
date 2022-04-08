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
  const { todoList, searchValue } = useTodos();

  const onEdit = (e, value) => {
    e.stopPropagation();
    setEditValue(value);
    setToggle(true);
  };

  return (
    <section className={`container ${style.todoList}`}>
      <div>
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
      {todoList.length === 0 ? (
        <h2 className={style.empty}>
          {searchValue ? "Nothing found !" : "The task is empty please add new task."}
        </h2>
      ) : (
        todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={(e) => completedHandler(e, todo.id)}
              onDelete={(e) => deleteHandler(e, todo)}
              onEdit={(e) => onEdit(e, todo)}
            />
          );
        })
      )}
    </section>
  );
};

export default TodoList;
