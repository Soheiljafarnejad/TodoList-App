import Category from "../Category/Category";
import CategoryForm from "../Category/CategoryForm";
import { useTodos, useTodosAction } from "../Context/TodoContext";
import style from "./CategoryList.module.css";

const CategoryList = () => {
  const { categoryList } = useTodos();
  const { deleteCategoryHandler } = useTodosAction();
  return (
    <section className="container">
      <h2>Categories</h2>
      <div className={style.category}>
      <CategoryForm />
        {categoryList.map((item) => {
          return (
            <Category
              title={item.title}
              value={item.value}
              color={item.color}
              id={item.id}
              key={item.id}
              onDelete={() => deleteCategoryHandler(item.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
