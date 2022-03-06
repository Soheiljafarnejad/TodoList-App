import { useState, useRef } from "react";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import style from "./Category.module.css";
import toast from "react-hot-toast";
const CategoryForm = () => {
  const { categoryList } = useTodos();
  const { addCategoryHandler } = useTodosAction();
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const valueHandler = (e) => {
    const textValidation = e.target.value.trim().toLowerCase();
    setValue(textValidation);
  };

  const submitHandler = (e) => {
    inputRef.current.focus();
    e.preventDefault();
    if (!value) {
      toast.error("Please enter category");
      return;
    }
    const noRepetition = categoryList.find(
      (item) => item.title.toLowerCase() === value
    );
    if (noRepetition) {
      toast.error("There are categories");
      return;
    }
    addCategoryHandler(value);
    setValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${style.categoryItem} ${style.categoryForm} ${style.category}`}
    >
      <span className={style.value}>add new category:</span>
      <input
        onChange={valueHandler}
        value={value}
        className={style.input}
        placeholder="category"
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CategoryForm;
