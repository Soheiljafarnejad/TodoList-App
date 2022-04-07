import { useTodosAction } from "../Context/TodoContext";
import style from "./Category.module.css";

const Category = ({ title, value, color, id }) => {
  const { selectCategory } = useTodosAction();
  const clickHandler = (e) => {
    selectCategory(e.target.id);
  };
  return (
    <div className={style.category}>
      <input onClick={clickHandler} type="radio" name="category" id={id} />
      <label htmlFor={id} className={`${style.categoryItem}`}>
        <span className={style.value}>tasks {value}</span>
        <h3 className={`${style.title} ${color}`}>{title}</h3>
      </label>
    </div>
  );
};

export default Category;
