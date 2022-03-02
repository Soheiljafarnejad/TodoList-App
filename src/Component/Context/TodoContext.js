import { createContext, useContext, useState } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");
  const [sortCategory, setSortCategory] = useState({});

  return (
    <TodoContainerContext.Provider
      value={{ todos, todoList, status, sortCategory }}
    >
      <TodoContainerContextDispatcher.Provider
        value={{ setTodos, setTodoList, setStatus, setSortCategory }}
      >
        {children}
      </TodoContainerContextDispatcher.Provider>
    </TodoContainerContext.Provider>
  );
};

export default TodoContext;

export const useTodos = () => useContext(TodoContainerContext);
export const useTodosAction = () => {
  const { todos, sortCategory } = useTodos();
  const { setTodos, setTodoList, setStatus, setCategory, setSortCategory } =
    useContext(TodoContainerContextDispatcher);
  const addTodosHandler = (value) => {
    if (!sortCategory.title || sortCategory.title === "All") {
      alert("add category");
      return;
    }
    const newTodo = {
      text: value,
      category: sortCategory.title,
      color: sortCategory.color,
      id: Math.floor(Math.random() * 100000),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setSortCategory({});
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

  const filterTodoHandler = (value) => {
    switch (value) {
      case "All": {
        return setTodoList(todos);
      }
      case "Completed": {
        const selectItem = todos.filter((item) => item.isComplete);
        return setTodoList(selectItem);
      }
      case "Uncompleted": {
        const selectItem = todos.filter((item) => !item.isComplete);
        return setTodoList(selectItem);
      }
      default:
        return setTodoList(todos);
    }
  };

  const updateTodoHandler = (value) => {
    setTodoList(value);
  };

  const addCategoryHandler = (title, color) => {
    setSortCategory({ title: title, color: color });
  };

  return {
    addTodosHandler,
    completedHandler,
    deleteHandler,
    editTodoHandler,
    filterTodoHandler,
    addCategoryHandler,
    updateTodoHandler,
  };
};
