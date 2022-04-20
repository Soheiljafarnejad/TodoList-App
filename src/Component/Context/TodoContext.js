import { createContext, useContext, useEffect, useReducer } from "react";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETED_TODO = "COMPLETED_TODO";
const EDIT_TODO = "EDIT_TODO";
const CATEGORY = "CATEGORY";
const SEARCH = "SEARCH";

const UPDATE_TODOLIST = "UPDATE_TODOLIST";
const SAVE_LOCAL = "SAVE_LOCAL";

export const addTodo = (value) => {
  return { type: ADD_TODO, payload: value };
};

export const deleteTodo = (event, value) => {
  return { type: DELETE_TODO, payload: value, event };
};

export const completedTodo = (event, value) => {
  return { type: COMPLETED_TODO, payload: value, event };
};

export const editTodo = (value) => {
  return { type: EDIT_TODO, payload: value };
};

export const selectCategory = (value) => {
  return { type: CATEGORY, payload: value };
};

export const updateTodoList = (value) => {
  return { type: UPDATE_TODOLIST, payload: value };
};

export const saveLocal = (todos, category) => {
  return { type: SAVE_LOCAL, todos, category };
};

export const searchTodo = (value) => {
  return { type: SEARCH, payload: value };
};

const TodoContainerContext = createContext();
const TodoContainerContextDispatcher = createContext();

const TodoContext = ({ children }) => {
  const initState = {
    todos: [],
    todoList: [],
    categoryList: [
      { title: "Personal", value: 0, color: "pink", id: 1 },
      { title: "Business", value: 0, color: "purple", id: 2 },
      { title: "School", value: 0, color: "green", id: 3 },
      { title: "Work", value: 0, color: "orange", id: 4 },
    ],
    category: {},
    searchValue: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TODO:
        return addTodosHandler(state, action);
      case DELETE_TODO:
        return deleteHandler(state, action);
      case COMPLETED_TODO:
        return completedHandler(state, action);
      case EDIT_TODO:
        return editTodoHandler(state, action);
      case CATEGORY:
        return selectCategoryHandler(state, action);
      case SEARCH:
        return searchHandler(state, action);
      case UPDATE_TODOLIST:
        return { ...state, todoList: action.payload };
      case SAVE_LOCAL:
        return { ...state, todos: action.todos, categoryList: action.category };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const category = JSON.parse(localStorage.getItem("category"));
    if (todos && category) dispatch(saveLocal(todos, category));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
    dispatch(updateTodoList(state.todos));
  }, [dispatch, state.todos]);

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(state.categoryList));
  }, [dispatch, state.categoryList]);

  return (
    <TodoContainerContext.Provider value={state}>
      <TodoContainerContextDispatcher.Provider value={dispatch}>
        {children}
      </TodoContainerContextDispatcher.Provider>
    </TodoContainerContext.Provider>
  );
};

export default TodoContext;

export const useTodos = () => useContext(TodoContainerContext);
export const useTodosAction = () => useContext(TodoContainerContextDispatcher);

const searchHandler = (state, action) => {
  const filtered = state.todos.filter((item) => {
    return item.title.toLowerCase().includes(action.payload.toLowerCase());
  });
  return { ...state, searchValue: action.payload, todoList: filtered };
};

const addTodosHandler = (state, action) => {
  const updateCategory = categoryValueHandler(
    state,
    ADD_TODO,
    state.category.title
  );
  const newTodo = {
    title: action.payload.title,
    description: action.payload.description,
    category: state.category.title,
    color: state.category.color,
    id: new Date().getTime(),
    isComplete: false,
  };
  return {
    ...state,
    todos: [...state.todos, newTodo],
    categoryList: updateCategory,
  };
};

const completedHandler = (state, action) => {
  action.event.stopPropagation();
  const index = state.todos.findIndex((item) => {
    return item.id === action.payload.id;
  });
  const selectTodo = { ...state.todos[index] };
  selectTodo.isComplete = !selectTodo.isComplete;
  const cloneTodo = [...state.todos];
  cloneTodo[index] = selectTodo;
  return { ...state, todos: cloneTodo };
};

const deleteHandler = (state, action) => {
  const updateCategory = categoryValueHandler(
    state,
    DELETE_TODO,
    action.payload.category
  );
  action.event.stopPropagation();
  const deletedTodo = state.todos.filter(
    (item) => item.id !== action.payload.id
  );
  return { ...state, todos: deletedTodo, categoryList: updateCategory };
};

const editTodoHandler = (state, action) => {
  const index = state.todos.findIndex((item) => item.id === action.payload.id);
  const selectTodo = { ...state.todos[index] };
  selectTodo.title = action.payload.title;
  selectTodo.description = action.payload.description;
  const cloneTodo = [...state.todos];
  cloneTodo[index] = selectTodo;
  return { ...state, todos: cloneTodo };
};

const selectCategoryHandler = (state, action) => {
  const selected = state.categoryList.find(
    (item) => parseInt(item.id) === parseInt(action.payload)
  );
  return { ...state, category: selected };
};

const categoryValueHandler = (state, type, category) => {
  const index = state.categoryList.findIndex((item) => item.title === category);
  const selectCategory = { ...state.categoryList[index] };
  if (type === ADD_TODO) selectCategory.value = selectCategory.value + 1;
  if (type === DELETE_TODO) selectCategory.value = selectCategory.value - 1;
  const cloneCategory = [...state.categoryList];
  cloneCategory[index] = selectCategory;
  return cloneCategory;
};
