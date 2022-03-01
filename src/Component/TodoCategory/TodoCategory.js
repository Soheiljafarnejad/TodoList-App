import style from "./TodoCategory.module.css";

const TodoCategory = () => {
  const categoryHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="container">
      <h2>Categories</h2>
      <div className={style.category}>
        <button
          className={style.categoryItem}
          value="Work"
          onClick={(e) => categoryHandler(e, "value")}
        >
          <span className={style.value}>tasks 40</span>
          <h3 className={`${style.border}`}>Work</h3>
        </button>
        <button
          className={style.categoryItem}
          value="Personal"
          onClick={(e) => categoryHandler(e, "value")}
        >
          <span className={style.value}>tasks 40</span>
          <h3 className={`${style.border} ${style.borderBlue}`}>Personal</h3>
        </button>
        <button
          className={style.categoryItem}
          value="School"
          onClick={(e) => categoryHandler(e, "value")}
        >
          <span className={style.value}>tasks 40</span>
          <h3 className={`${style.border}`}>School</h3>
        </button>
        <button
          className={style.categoryItem}
          value="business"
          onClick={(e) => categoryHandler(e, "value")}
        >
          <span className={style.value}>tasks 40</span>
          <h3 className={`${style.border} ${style.borderBlue}`}>business</h3>
        </button>
      </div>
    </section>
  );
};

export default TodoCategory;