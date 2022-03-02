import { createContext, useContext, useState } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");

  // category state
  const [statusCategory, setStatusCategory] = useState({
    title: "All",
    color: "blue",
  });
  const [category, setCategory] = useState([
    { title: "All", value: 0, color: "blue", id: 0 },
  ]);
  // end

  return (
    <TodoContainerContext.Provider
      value={{ todos, todoList, status, statusCategory, category }}
    >
      <TodoContainerContextDispatcher.Provider
        value={{
          setTodos,
          setTodoList,
          setStatus,
          setStatusCategory,
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
  const { todos, todoList, status, statusCategory, category } = useTodos();
  const { setTodos, setTodoList, setStatus, setStatusCategory, setCategory } =
    useContext(TodoContainerContextDispatcher);
  const addTodosHandler = (value) => {
    if (statusCategory.title === "All") {
      alert("add category");
      return;
    }
    const newTodo = {
      text: value,
      category: statusCategory.title,
      color: statusCategory.color,
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

  const editTodoHandler = (id, value) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectTodo = { ...todos[index] };
    selectTodo.text = value;
    const cloneTodo = [...todos];
    cloneTodo[index] = selectTodo;
    setTodos(cloneTodo);
  };

  const filterStatusHandler = (value) => {
    const cloneTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    switch (value) {
      case "All": {
        return setTodoList(cloneTodoList);
      }
      case "Completed": {
        const selectItem = cloneTodoList.filter((item) => item.isComplete);
        return setTodoList(selectItem);
      }
      case "Uncompleted": {
        const selectItem = cloneTodoList.filter((item) => !item.isComplete);
        return setTodoList(selectItem);
      }
      default:
        return setTodoList(cloneTodoList);
    }
  };

  // categoryHandler

  const filterCategoryHandler = (category) => {
    setStatusCategory(category);
    if (category.title === "All") {
      return localStorage.setItem("todoList", JSON.stringify(todos));
    }
    const sorted = todos.filter((item) => item.category === category.title);
    localStorage.setItem("todoList", JSON.stringify(sorted));
  };

  const addCategoryHandler = (title) => {
    const length = category.length;
    const color = length % 2 === 0 ? "blue" : "pink";
    const newCategory = {
      title: title,
      value: 0,
      color: color,
      id: new Date().getTime(),
    };
    setCategory([...category, newCategory]);
  };

  const deleteCategoryHandler = (id) => {
    const deleted = category.filter((item) => item.id !== id);
    setCategory(deleted);
  };
  // end

  return {
    addTodosHandler,
    completedHandler,
    deleteHandler,
    editTodoHandler,
    filterStatusHandler,
    filterCategoryHandler,
    addCategoryHandler,
    deleteCategoryHandler,
    setTodoList,
    setStatus,
    setStatusCategory,
    setTodos,
    setCategory,
  };
};
