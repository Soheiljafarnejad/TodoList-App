import style from "./Category.module.css";
const CategoryForm = () => {
  return (
    <div className={`${style.categoryItem} ${style.categoryForm}`}>
      <input className={style.input} placeholder="New category..." />
      <button>Add</button>
    </div>
  );
};

export default CategoryForm;
