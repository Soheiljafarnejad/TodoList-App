import { createContext, useContext, useState } from "react";

const TodoContainer = createContext();
const TodoContainerDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContainer.Provider value={todos}>
      <TodoContainerDispatcher.Provider value={setTodos}>
        {children}
      </TodoContainerDispatcher.Provider>
    </TodoContainer.Provider>
  );
};

export default TodoContext;

export const useTodos = () => useContext(TodoContainer);
export const useTodosAction = () => {
  const setTodos = useContext(TodoContainerDispatcher);
  const todos = useTodos();

  const addTodosHandler = (value) => {
    const newTodo = {
      text: value,
      id: Math.floor(Math.random() * 100000),
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

  return { addTodosHandler, completedHandler, deleteHandler , editTodoHandler };
};
