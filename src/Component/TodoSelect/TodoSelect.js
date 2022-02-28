import SelectCom from "../../common/Select/SelectCom";

const TodoSelect = ({ filterTodoHandler, setOptions }) => {
  const filterValue = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  const onFilter = (e) => {
    setOptions(e.value);
    filterTodoHandler(e.value);
  };
  return (
    <>
      <SelectCom options={filterValue} onChange={onFilter} />
    </>
  );
};

export default TodoSelect;
