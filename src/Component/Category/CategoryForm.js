import { useState } from "react";
import { useCategoryAction } from "../Context/CategoryContext";
import style from "./Category.module.css";
const CategoryForm = () => {
  const { addCategoryHandler } = useCategoryAction();
  const [value, setValue] = useState("");
  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value) {
      alert("add category");
      return;
    }
    addCategoryHandler(value);
    setValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${style.categoryItem} ${style.categoryForm}`}
    >
      <input
        onChange={valueHandler}
        value={value}
        className={style.input}
        placeholder="New category..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CategoryForm;
