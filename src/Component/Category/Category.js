import { useTodos, useTodosAction } from "../Context/TodoContext";
import style from "./Category.module.css";
import { BiTrashAlt } from "react-icons/bi";

const Category = ({ title, value, color, id, onDelete }) => {
  const { todos, category } = useTodos();
  const { filterCategoryHandler } = useTodosAction();
  const clickHandler = (e) => {
    const value = {
      title: title,
      color: e.target.dataset.color,
    };
    filterCategoryHandler(value);
  };
  return (
    <div className={style.category}>
      <input
        onClick={clickHandler}
        type="radio"
        name="category"
        id={id}
        data-color={color}
      />
      <label
        htmlFor={id}
        className={`${style.categoryItem} ${
          category.title === title ? `selected-${color}` : ""
        }`}
      >
        <div className={style.discretion}>
          <span className={style.value}>
            tasks {id !== 0 ? value : todos.length}
          </span>
          {id !== 0 && (
            <BiTrashAlt onClick={onDelete} className={style.trash} />
          )}
        </div>
        <h3 className={`${style.title} ${color}`}>{title}</h3>
      </label>
    </div>
  );
};

export default Category;
