import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  searchQuery: "",
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "RESET_SEARCH":
      return {
        ...state,
        searchQuery: "",
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{ searchQuery: state.searchQuery, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
