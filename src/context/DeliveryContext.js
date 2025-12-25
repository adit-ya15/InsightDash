import { createContext, useState } from "react";
import { deliveryRows } from "../datatablesource";

export const DeliveryContext = createContext();

export const DeliveryContextProvider = ({ children }) => {
  const [data, setData] = useState(deliveryRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = (delivery) => {
    const newItem = { id: `TRK-${Math.floor(Math.random() * 1000)}`, ...delivery };
    setData([...data, newItem]);
  };

  return (
    <DeliveryContext.Provider value={{ data, handleDelete, handleAdd }}>
      {children}
    </DeliveryContext.Provider>
  );
};
