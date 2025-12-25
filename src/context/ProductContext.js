import { createContext, useState } from "react";
import { productRows } from "../datatablesource";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = (product) => {
    const newItem = { id: data.length + 1, ...product };
    setData([...data, newItem]);
  };

  return (
    <ProductContext.Provider value={{ data, handleDelete, handleAdd }}>
      {children}
    </ProductContext.Provider>
  );
};
