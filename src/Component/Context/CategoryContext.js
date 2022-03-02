import { createContext, useContext, useState } from "react";

const CategoryContainerContext = createContext();
const CategoryContainerContextDispatcher = createContext();

const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState([
    { title: "All", value: 0, color: "blue", id: 0 },
  ]);
  return (
    <CategoryContainerContext.Provider value={category}>
      <CategoryContainerContextDispatcher.Provider value={setCategory}>
        {children}
      </CategoryContainerContextDispatcher.Provider>
    </CategoryContainerContext.Provider>
  );
};

export default CategoryContext;

export const useCategory = () => useContext(CategoryContainerContext);
export const useCategoryAction = () => {
  const category = useCategory();
  const setCategory = useContext(CategoryContainerContextDispatcher);

  const addCategoryHandler = (title) => {
    const length = category.length;
    const color = length % 2 === 0 ? "blue" : "pink";
    const newCategory = {
      title: title,
      value: 0,
      color: color,
      id: Math.floor(Math.random() * 1000),
    };
    setCategory([...category, newCategory]);
  };

  return { addCategoryHandler };
};
