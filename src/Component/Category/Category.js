import { useTodosAction } from "../Context/TodoContext";
import style from "./Category.module.css";

const Category = ({ title, value, color }) => {
  const { addCategoryHandler } = useTodosAction();
  const categoryValue = (e) => {
    if (e.target.value) {
      const value = e.target.value.split(",");
      const [title, color] = value;
      addCategoryHandler(title, color);
    }
  };
  return (
    <button
      className={style.categoryItem}
      value={[title, color]}
      onClick={(e) => categoryValue(e, "value")}
    >
      <span className={style.value}>tasks {value}</span>
      <h3 className={`${style.title} ${color}`}>{title}</h3>
    </button>
  );
};

export default Category;
