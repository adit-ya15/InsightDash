import { createContext, useState } from "react";
import { orderRows } from "../datatablesource";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [data, setData] = useState(orderRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = (order) => {
    const newItem = { id: Math.floor(Math.random() * 1000000), ...order };
    setData([...data, newItem]);
  };

  return (
    <OrderContext.Provider value={{ data, handleDelete, handleAdd }}>
      {children}
    </OrderContext.Provider>
  );
};
