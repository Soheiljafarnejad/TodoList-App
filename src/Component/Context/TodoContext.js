import { createContext, useContext, useState } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");

  // category state
  const [category, setCategory] = useState({
    title: "All",
    color: "blue",
  });
  const [categoryList, setCategoryList] = useState([
    { title: "All", color: "blue", id: 0 },
  ]);
  // end

  return (
    <TodoContainerContext.Provider
      value={{ todos, todoList, status, category, categoryList }}
    >
      <TodoContainerContextDispatcher.Provider
        value={{
          setTodos,
          setTodoList,
          setStatus,
          setCategory,
          setCategoryList,
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
  const { todos, category, categoryList } = useTodos();
  const { setTodos, setTodoList, setStatus, setCategory, setCategoryList } =
    useContext(TodoContainerContextDispatcher);

  const searchHandler = (value) => {
    const cloneTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    const filtered = cloneTodoList.filter((item) => {
      return item.text.toLowerCase().includes(value.toLowerCase());
    });
    setTodoList(filtered);
  };
  const addTodosHandler = (value) => {
    const newTodo = {
      text: value,
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
    setCategory(category);
    if (category.title === "All") {
      return localStorage.setItem("todoList", JSON.stringify(todos));
    }
    const sorted = todos.filter((item) => item.category === category.title);
    localStorage.setItem("todoList", JSON.stringify(sorted));
  };

  const addCategoryHandler = (title) => {
    const length = categoryList.length;
    const color = length % 2 === 0 ? "blue" : "pink";
    const newCategory = {
      title: title,
      value: 0,
      color: color,
      id: new Date().getTime(),
    };
    setCategoryList([...categoryList, newCategory]);
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
    filterStatusHandler,
    filterCategoryHandler,
    addCategoryHandler,
    deleteCategoryHandler,
    valueCategoryHandler,
    setTodoList,
    setStatus,
    setCategory,
    setTodos,
    setCategoryList,
  };
};
