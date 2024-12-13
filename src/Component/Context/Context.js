import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export default function ContextProvider({ children }) {
  const [data, setData] = useState({});
  const handleData = (state) => {
    setData(state);
  };

  const getState = () => {
    return data; // Return `data` correctly
  };

  return (
    <AppContext.Provider value={{ handleData, getState }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook for Using Context
export const useAppContext = () => {
  return useContext(AppContext);
};
