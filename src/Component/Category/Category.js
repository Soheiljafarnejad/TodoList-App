import { useTodosAction } from "../Context/TodoContext";
import style from "./Category.module.css";
import { BiTrashAlt } from "react-icons/bi";

const Category = ({ title, value, color, id, onDelete }) => {
  const { filterCategoryHandler } = useTodosAction();
  const categoryValue = (e) => {
    if (e.target.value) {
      const value = e.target.value.split(",");
      const [title, color] = value;
      filterCategoryHandler({title, color});
    }
  };
  return (
    <button
      className={style.categoryItem}
      value={[title, color]}
      onClick={(e) => categoryValue(e, "value")}
    >
      <div className={style.discretion}>
        <span className={style.value}>tasks {value}</span>
        {id !== 0 && <BiTrashAlt onClick={onDelete} className={style.trash} />}
      </div>
      <h3 className={`${style.title} ${color}`}>{title}</h3>
    </button>
  );
};

export default Category;
