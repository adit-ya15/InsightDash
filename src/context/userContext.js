import { createContext, useState } from "react";
import { userRows } from "../datatablesource";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = (user) => {
    // Basic ID generation for demo purposes
    const newItem = { id: data.length + 1, ...user };
    setData([...data, newItem]);
  };

  return (
    <UserContext.Provider value={{ data, handleDelete, handleAdd }}>
      {children}
    </UserContext.Provider>
  );
};
