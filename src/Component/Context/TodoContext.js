import { createContext, useContext, useState } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");

  const [categoryList, setCategoryList] = useState([
    { title: "Personal", value: 0, color: "pink", id: 1 },
    { title: "Business", value: 0, color: "purple", id: 2 },
    { title: "School", value: 0, color: "green", id: 3 },
    { title: "Work", value: 0, color: "orange", id: 4 },
  ]);
  const [category, setCategory] = useState({});

  return (
    <TodoContainerContext.Provider
      value={{ todos, status, categoryList, category }}
    >
      <TodoContainerContextDispatcher.Provider
        value={{
          setTodos,
          setStatus,
          setCategoryList,
          setCategory,
        }}
      >
        {children}
      </TodoContainerContextDispatcher.Provider>
    </TodoContainerContext.Provider>
  );
};

export default TodoContext;

export const useTodos = () => useContext(TodoContainerContext);
export const useTodosAction = () => {
  const { todos, categoryList, category } = useTodos();
  const { setTodos, setStatus, setCategory, setCategoryList } = useContext(
    TodoContainerContextDispatcher
  );

  const searchHandler = (value) => {
    const cloneTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    const filtered = cloneTodoList.filter((item) => {
      return item.text.toLowerCase().includes(value.toLowerCase());
    });
    setTodos(filtered);
  };
  const addTodosHandler = (value) => {
    if (!category.title) {
      alert("select category");
      return;
    }
    const newTodo = {
      title: value.title,
      description: value.description,
      category: category.title,
      color: category.color,
      id: new Date().getTime(),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completedHandler = (id) => {
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    const selectTodo = { ...todos[index] };
    selectTodo.isComplete = !selectTodo.isComplete;
    const cloneTodo = [...todos];
    cloneTodo[index] = selectTodo;
    setTodos(cloneTodo);
  };

  const deleteHandler = (id) => {
    const deletedTodo = todos.filter((item) => item.id !== id);
    setTodos(deletedTodo);
  };

  const editTodoHandler = (value) => {
    const index = todos.findIndex((item) => item.id === value.id);
    const selectTodo = { ...todos[index] };
    selectTodo.title = value.title;
    selectTodo.description = value.description;
    const cloneTodo = [...todos];
    cloneTodo[index] = selectTodo;
    setTodos(cloneTodo);
  };

  const selectCategory = (id) => {
    const selected = categoryList.filter(
      (item) => parseInt(item.id) === parseInt(id)
    );
    setCategory(selected[0]);
  };

  return {
    searchHandler,
    addTodosHandler,
    completedHandler,
    deleteHandler,
    editTodoHandler,
    selectCategory,
    setStatus,
    setCategory,
    setTodos,
    setCategoryList,
  };
};
