import TodoForm from "../../common/TodoForm/TodoForm";
import { addTodo, useTodosAction } from "../../Component/Context/TodoContext";
import { useState } from "react";

const TodoAdd = ({ setToggle }) => {
  const dispatch = useTodosAction();

  const [value, setValue] = useState({ title: "", description: "" });

  const onSubmit = () => {
    dispatch(addTodo(value));
    setValue({ title: "", description: "" });
  };

  return (
    <section className="container">
      <TodoForm
        edit={false}
        setToggle={setToggle}
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default TodoAdd;
