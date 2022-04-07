import { createContext, useContext, useState } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");

  const [categoryList, setCategoryList] = useState([
    { title: "Personal", value: 0, color: "blue", id: 1 },
    { title: "Business", value: 0, color: "pink", id: 2 },
    { title: "School", value: 0, color: "blue", id: 3 },
    { title: "Work", value: 0, color: "pink", id: 4 },
  ]);
  const [category, setCategory] = useState({});
  // end

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
  const { setTodos, setStatus, setCategory, setCategoryList } =
    useContext(TodoContainerContextDispatcher);

  const searchHandler = (value) => {
    const cloneTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    const filtered = cloneTodoList.filter((item) => {
      return item.text.toLowerCase().includes(value.toLowerCase());
    });
    // setTodoList(filtered);
  };
  const addTodosHandler = (value) => {
    if(!category.title){
      alert("h")
      return
    }
    const newTodo = {
      title: value,
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
    const temp = todos.filter((item) => item.id === id);
    const deletedTodo = todos.filter((item) => item.id !== id);
    setTodos(deletedTodo);
    valueCategoryHandler(temp[0].category, true);
  };

  const editTodoHandler = (id, value) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectTodo = { ...todos[index] };
    selectTodo.text = value;
    const cloneTodo = [...todos];
    cloneTodo[index] = selectTodo;
    setTodos(cloneTodo);
  };

  // categoryHandler
  const selectCategory = (id) => {
    const selected = categoryList.filter(
      (item) => parseInt(item.id) === parseInt(id)
    );
    setCategory(selected[0]);
  };

  const deleteCategoryHandler = (id) => {
    const temp = categoryList.filter((item) => item.id === id);
    const deleted = categoryList.filter((item) => item.id !== id);
    setCategoryList(deleted);

    // deleted All todo Category
    const deletedTodo = todos.filter((item) => item.category !== temp[0].title);
    setTodos(deletedTodo);
  };

  const valueCategoryHandler = (title, isExit) => {
    let value = todos.filter((item) => item.category === title).length;
    if (isExit) value--;
    const index = categoryList.findIndex((item) => item.title === title);
    const selectCategory = { ...categoryList[index] };
    selectCategory.value = value;
    const cloneCategory = [...categoryList];
    cloneCategory[index] = selectCategory;
    setCategoryList(cloneCategory);
  };

  return {
    searchHandler,
    addTodosHandler,
    completedHandler,
    deleteHandler,
    editTodoHandler,
    selectCategory,
    deleteCategoryHandler,
    valueCategoryHandler,
    setStatus,
    setCategory,
    setTodos,
    setCategoryList,
  };
};
