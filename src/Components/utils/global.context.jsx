import { createContext, useReducer, useEffect } from "react";

export const initialState = {
  theme: "light",
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  dentists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_NOTIFICATION":
      return { ...state, notification: action.payload };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
