import { useEffect, useRef, useState } from "react";
import TodoForm from "../../common/TodoForm/TodoForm";
import { useTodosAction } from "../Context/TodoContext";

const TodoEdit = ({ setToggle, value, setValue }) => {
  const { editTodoHandler } = useTodosAction();
  const onSubmit = () => {
    editTodoHandler(value);
  };

  return (
    <section className="container">
      <TodoForm
        edit={true}
        setToggle={setToggle}
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default TodoEdit;
