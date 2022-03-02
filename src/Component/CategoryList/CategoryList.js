import Category from "../Category/Category";
import CategoryForm from "../Category/CategoryForm";
import { useCategory } from "../Context/CategoryContext";

import style from "./CategoryList.module.css";

const CategoryList = () => {
  const category = useCategory();
  return (
    <section className="container">
      <h2>Categories</h2>
      <div className={style.category}>
        <CategoryForm/>
        {category.map((item) => {
          return (
            <Category
              title={item.title}
              value={item.value}
              color={item.color}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
