import { useEffect, useRef } from "react";
import style from "./TodoForm.module.css";
import toast from "react-hot-toast";

const TodoForm = ({ edit, setToggle, value, setValue, onSubmit }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const inputHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === "cancel") {
      setToggle({ type: "" });
      return;
    }
    if (!value.title || !value.description) {
      toast.error("Please fill in all items");
      return;
    }
    toast.success("updated");
    onSubmit();
    setToggle({ type: "" });
  };
  return (
    <form className={style.form} onSubmit={formHandler}>
      <h3>{edit ? "Edit task" : "Add new task"}</h3>
      <input
        onChange={inputHandler}
        type="text"
        name="title"
        value={value.title}
        placeholder="Title..."
        ref={ref}
      />
      <textarea
        value={value.description}
        onChange={inputHandler}
        name="description"
        placeholder="Description..."
      />
      <div className={style.btn}>
        <button className={style.cancel} name="cancel" type="submit">
          cancel
        </button>
        <button className={style.save} name="save" type="submit">
          {edit ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
