import { createContext, useContext, useState } from "react";

const CategoryContainerContext = createContext();
const CategoryContainerContextDispatcher = createContext();

const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState([
    { title: "All", value: 0, color: "blue", id: 0 },
    { title: "Work", value: 0, color: "pink", id: 1 },
    { title: "School", value: 0, color: "blue", id: 2 },
    { title: "Personal", value: 0, color: "pink", id: 3 },
    { title: "Business", value: 0, color: "blue", id: 4 },
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
};
