import SelectCom from "../../common/Select/SelectCom";

const TodoNavBar = ({ filterTodoHandler, setCategory, category }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  const onFilter = (e) => {
    setCategory(e.value);
    filterTodoHandler(e.value);
  };
  return (
    <>
      <SelectCom options={options} onChange={onFilter} />
    </>
  );
};

export default TodoNavBar;
