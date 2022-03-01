import { createContext, useContext, useState } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoListContainerContext = createContext();
const TodoListContainerContextDispatcher = createContext();

const StatusContainerContext = createContext();
const StatusContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
    
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState("All");

  return (
    <TodoContainerContext.Provider value={todos}>
      <TodoContainerContextDispatcher.Provider value={setTodos}>
        <TodoListContainerContext.Provider value={filtered}>
          <TodoListContainerContextDispatcher.Provider value={setFiltered}>
            <StatusContainerContext.Provider value={status}>
              <StatusContainerContextDispatcher.Provider value={setStatus}>
                {children}
              </StatusContainerContextDispatcher.Provider>
            </StatusContainerContext.Provider>
          </TodoListContainerContextDispatcher.Provider>
        </TodoListContainerContext.Provider>
      </TodoContainerContextDispatcher.Provider>
    </TodoContainerContext.Provider>
  );
};

export default TodoContext;

export const useStatus = () => useContext(StatusContainerContext);
export const useStatusAction = () => useContext(StatusContainerContextDispatcher);

export const useTodoList = () => useContext(TodoListContainerContext);
export const useTodoListAction = () => useContext(TodoListContainerContextDispatcher);

export const useTodos = () => useContext(TodoContainerContext);
export const useTodosAction = () => {
  const todos = useTodos();
  const setTodos = useContext(TodoContainerContextDispatcher);
  const setFiltered = useTodoListAction();
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

  const filterTodoHandler = (value) => {
    switch (value) {
      case "All": {
        return setFiltered(todos);
      }
      case "Completed": {
        const selectItem = todos.filter((item) => item.isComplete);
        return setFiltered(selectItem);
      }
      case "Uncompleted": {
        const selectItem = todos.filter((item) => !item.isComplete);
        return setFiltered(selectItem);
      }
      default:
        return setFiltered(todos);
    }
  };
  return {
    addTodosHandler,
    completedHandler,
    deleteHandler,
    editTodoHandler,
    filterTodoHandler,
  };
};
