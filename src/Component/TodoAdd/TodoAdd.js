import TodoForm from "../../common/TodoForm/TodoForm";
import { useTodos, useTodosAction } from "../../Component/Context/TodoContext";
import toast from "react-hot-toast";
import { useState } from "react";

const TodoAdd = ({ setToggle }) => {
  const { categoryList } = useTodos();
  const { addTodosHandler } = useTodosAction();

  const [value, setValue] = useState({ title: "", description: "" });

  const onSubmit = () => {
    if (!value.title || !value.description) {
      toast.error("Enter a new value");
      return;
    }
    addTodosHandler(value);
    setValue({ title: "", description: "" });
  };

  return (
    <section className="container">
      <TodoForm
        setToggle={setToggle}
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default TodoAdd;
