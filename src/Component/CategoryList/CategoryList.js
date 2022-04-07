import Category from "../Category/Category";
import { useTodos } from "../Context/TodoContext";
import style from "./CategoryList.module.css";

const CategoryList = () => {
  const { categoryList } = useTodos();
  return (
    <section className="container">
      <h2>Dashboard</h2>
      <p>See your overall performance</p>
      <div className={style.categoryList}>
        {categoryList.map((item) => {
          return (
            <Category
              title={item.title}
              value={item.value}
              color={item.color}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
