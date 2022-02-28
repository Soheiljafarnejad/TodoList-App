import style from "./TodoCategory.module.css";

const TodoCategory = () => {
  const categoryHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className={style.container}>
      <button
        className={style.category}
        value="Work"
        onClick={(e) => categoryHandler(e, "value")}
      >
        <span className={style.value}>tasks 40</span>
        <h3 className={`${style.border}`}>Work</h3>
      </button>
      <button
        className={style.category}
        value="Personal"
        onClick={(e) => categoryHandler(e, "value")}
      >
        <span className={style.value}>tasks 40</span>
        <h3 className={`${style.border} ${style.borderBlue}`}>Personal</h3>
      </button>
      <button
        className={style.category}
        value="School"
        onClick={(e) => categoryHandler(e, "value")}
      >
        <span className={style.value}>tasks 40</span>
        <h3 className={`${style.border}`}>School</h3>
      </button>
      <button
        className={style.category}
        value="business"
        onClick={(e) => categoryHandler(e, "value")}
      >
        <span className={style.value}>tasks 40</span>
        <h3 className={`${style.border} ${style.borderBlue}`}>business</h3>
      </button>
    </section>
  );
};

export default TodoCategory;
