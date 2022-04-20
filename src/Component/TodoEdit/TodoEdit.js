import TodoForm from "../../common/TodoForm/TodoForm";
import { editTodo, useTodosAction } from "../Context/TodoContext";

const TodoEdit = ({ setToggle, value, setValue }) => {
  const dispatch = useTodosAction();
  const onSubmit = () => {
    dispatch(editTodo(value));
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
