import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [category, setCategory] = useState({});
  const [categoryList, setCategoryList] = useState([
    { title: "Personal", value: 0, color: "pink", id: 1 },
    { title: "Business", value: 0, color: "purple", id: 2 },
    { title: "School", value: 0, color: "green", id: 3 },
    { title: "Work", value: 0, color: "orange", id: 4 },
  ]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    const getCategory = JSON.parse(localStorage.getItem("category"));
    if (getCategory) setCategoryList(getCategory);
  }, []);

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categoryList));
  }, [categoryList]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodoList(todos);
  }, [todos]);

  return (
    <TodoContainerContext.Provider
      value={{ todos, todoList, categoryList, category, searchValue }}
    >
      <TodoContainerContextDispatcher.Provider
        value={{
          setTodos,
          setTodoList,
          setCategoryList,
          setCategory,
          setSearchValue,
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
  const {
    setTodos,
    setTodoList,
    setCategory,
    setCategoryList,
    setSearchValue,
  } = useContext(TodoContainerContextDispatcher);

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filtered = todos.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setTodoList(filtered);
  };
  const addTodosHandler = (value) => {
    const newTodo = {
      title: value.title,
      description: value.description,
      category: category.title,
      color: category.color,
      id: new Date().getTime(),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    categoryValue(newTodo.category, "add");
  };

  const completedHandler = (e, id) => {
    e.stopPropagation();
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    const selectTodo = { ...todos[index] };
    selectTodo.isComplete = !selectTodo.isComplete;
    const cloneTodo = [...todos];
    cloneTodo[index] = selectTodo;
    setTodos(cloneTodo);
  };

  const deleteHandler = (e, todo) => {
    e.stopPropagation();
    const deletedTodo = todos.filter((item) => item.id !== todo.id);
    setTodos(deletedTodo);
    categoryValue(todo.category, "delete");
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

  const categoryValue = (title, type) => {
    const index = categoryList.findIndex((item) => item.title === title);
    const selectCategory = { ...categoryList[index] };
    if (type === "add") selectCategory.value = selectCategory.value + 1;
    if (type === "delete") selectCategory.value = selectCategory.value - 1;
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
  };
};