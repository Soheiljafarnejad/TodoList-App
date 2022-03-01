import { createContext, useContext, useState } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState();

  return (
    <TodoContainerContext.Provider
      value={{ todos, todoList, status, category }}
    >
      <TodoContainerContextDispatcher.Provider
        value={{ setTodos, setTodoList, setStatus, setCategory }}
      >
        {children}
      </TodoContainerContextDispatcher.Provider>
    </TodoContainerContext.Provider>
  );
};

export default TodoContext;

export const useTodos = () => useContext(TodoContainerContext);
export const useTodosAction = () => {
  const { todos, category } = useTodos();
  const { setTodos, setTodoList, setStatus, setCategory } = useContext(
    TodoContainerContextDispatcher
  );
  const addTodosHandler = (value) => {
    if (!category) {
      alert("add category");
      return setTodos(todos);
    }
    const newTodo = {
      text: value,
      category: category,
      id: Math.floor(Math.random() * 100000),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setCategory(null);
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

  const addCategoryHandler = (e) => {
    setCategory(e.target.value);
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
