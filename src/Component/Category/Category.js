import style from "./Category.module.css";
import { ImPower } from "react-icons/im";

const Category = ({ title, value, color, id, onClick }) => {

  return (
    <div className={`${style.category} `}>
      <input onClick={onClick} type="radio" name="category" id={id} />
      <label htmlFor={id} className={`${style.label}`}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.value}>{value} Tasks</span>
      </label>
      <ImPower className={color} />
    </div>
  );
};

export default Category;
