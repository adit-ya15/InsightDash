import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  active: false,
};

export const SidebarContext = createContext(INITIAL_STATE);

const SidebarReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        active: !state.active,
      };
    case "CLOSE":
      return {
        active: false,
      };
    case "OPEN":
      return {
        active: true,
      };
    default:
      return state;
  }
};

export const SidebarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SidebarReducer, INITIAL_STATE);

  return (
    <SidebarContext.Provider value={{ active: state.active, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};
