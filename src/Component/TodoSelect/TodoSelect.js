import SelectCom from "../../common/Select/SelectCom";
import { useTodosAction } from "../Context/TodoContext";

const TodoSelect = () => {
  const { filterStatusHandler, setStatus } = useTodosAction();
  const filterValue = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  const onFilter = (e) => {
    setStatus(e.value);
    filterStatusHandler(e.value);
  };

  return (
    <section className="container">
      <SelectCom
        title="sort by status:"
        options={filterValue}
        onChange={onFilter}
      />
    </section>
  );
};

export default TodoSelect;
