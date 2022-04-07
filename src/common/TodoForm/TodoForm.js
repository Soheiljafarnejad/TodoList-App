import { useEffect, useRef } from "react";
import style from "./TodoForm.module.css";


const TodoForm = ({ setToggle, value, setValue, onSubmit }) => {
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
      setToggle(false);
      return;
    }
    onSubmit();
    setToggle(false);
  };
  return (
    <form className={style.form} onSubmit={formHandler}>
      <h3>Add new task</h3>
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
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
