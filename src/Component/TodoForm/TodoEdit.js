import { useEffect, useRef, useState } from "react";
import { useTodosAction } from "../Context/TodoContext/TodoContext";

const TodoEdit = ({ edit }) => {
  const [editValue, setEditValue] = useState(edit.text);
  const { editTodoHandler, deleteHandler } = useTodosAction();

  const editRef = useRef();

  useEffect(() => {
    editRef.current.focus();
  });

  const inputHandler = (e) => {
    setEditValue(e.target.value);
  };

  const editValueHandler = (e) => {
    e.preventDefault();
    if (editValue === "") {
      deleteHandler(edit.id);
      edit.id = null;
      return;
    }
    editTodoHandler(edit.id, editValue);
    setEditValue("");
    edit.id = null;
  };

  return (
    <div>
      <form onSubmit={editValueHandler}>
        <input onChange={inputHandler} value={editValue} ref={editRef} />
        <button type="submit">updated</button>
      </form>
    </div>
  );
};

export default TodoEdit;
