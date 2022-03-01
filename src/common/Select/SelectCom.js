import Select from "react-select";
import style from "./SelectCom.module.css"
const SelectCom = ({ title, options, onChange, value }) => {
  return (
    <div className={style.select}>
      <span>{title}</span>
      <Select className={style.selected} options={options} onChange={onChange} value={value} />
    </div>
  );
};

export default SelectCom;
