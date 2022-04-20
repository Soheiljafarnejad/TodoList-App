import { useState } from "react";
import Modal from "../../common/Modal/Modal";
import Category from "../Category/Category";
import { selectCategory, useTodos } from "../Context/TodoContext";
import { useTodosAction } from "../Context/TodoContext";
import TodoAdd from "../TodoAdd/TodoAdd";
import style from "./CategoryList.module.css";

const CategoryList = () => {
  const { searchValue, categoryList } = useTodos();
  const dispatch = useTodosAction();

  const [toggle, setToggle] = useState();
  const clickHandler = (id) => {
    dispatch(selectCategory(id));
    setToggle(true);
  };
  
  return (
    <section className="container">
      {!searchValue && categoryList && (
        <>
          <h2>Dashboard</h2>
          <p>See your overall performance</p>
          {toggle && (
            <Modal>
              <TodoAdd setToggle={setToggle} />
            </Modal>
          )}
          <div className={style.categoryList}>
            {categoryList.map((item) => {
              return (
                <Category
                  title={item.title}
                  value={item.value}
                  color={item.color}
                  id={item.id}
                  key={item.id}
                  onClick={() => clickHandler(item.id)}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default CategoryList;
