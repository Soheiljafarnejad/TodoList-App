import { useEffect, useRef } from "react";
import style from "./TodoForm.module.css";
import toast from "react-hot-toast";

const TodoForm = ({ edit, setToggle, value, setValue, onSubmit }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const inputHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === "cancel") {
      setToggle(false);
      return;
    }
    if (!value.title || !value.description) {
      toast.error("Please enter value");

      !value.title ? titleRef.current.focus() : descriptionRef.current.focus();
      return;
    }
    toast.success("updated");
    onSubmit();
    setToggle(false);
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
        ref={titleRef}
      />
      <textarea
        value={value.description}
        onChange={inputHandler}
        name="description"
        placeholder="Description..."
        ref={descriptionRef}
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
