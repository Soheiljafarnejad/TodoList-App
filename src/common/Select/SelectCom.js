import Select from "react-select";

const SelectCom = ({ title, options, onChange, value }) => {
  return (
    <div>
      <span>{title}</span>
      <Select options={options} onChange={onChange} value={value} />
    </div>
  );
};

export default SelectCom;
