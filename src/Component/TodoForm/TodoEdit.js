import { useEffect, useRef, useState } from "react";
import style from "./TodoForm.module.css";
import toast from "react-hot-toast";

const TodoEdit = ({ selectedEdit, setSelectedEdit, editTodoHandler }) => {
  const [value, setValue] = useState(selectedEdit.text);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const editValueHandler = (e) => {
    e.preventDefault();
    // canceled
    if (e.nativeEvent.submitter.id === "cancel") {
      setSelectedEdit({ id: null });
      return;
    }
    // updated
    if (value === "") {
      toast.error("can not be empty!");
      return;
    }
    editTodoHandler(selectedEdit.id, value);
    toast.success("updated");
    setValue("");
    setSelectedEdit({ id: null });
  };

  return (
    <section className="container">
      <h2>Edit</h2>
      <form onSubmit={editValueHandler} className={style.form}>
        <input
          onChange={inputHandler}
          value={value}
          ref={inputRef}
          onBlur={() => inputRef.current.focus()}
        />
        {}
        <button
          type="submit"
          id={value.trim() === selectedEdit.text ? "cancel" : "update"}
          className={`${style.btn}`}
        >
          {value.trim() === selectedEdit.text ? "cancel" : "update"}
        </button>
      </form>
    </section>
  );
};

export default TodoEdit;
