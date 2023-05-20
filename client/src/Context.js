import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [transact, setTransact] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setData(response.data);
    });
  });
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/trans").then((response) => {
      setTransact(response.data);
    });
  });

  return (
    <AppContext.Provider value={{ data, setData, transact, setTransact }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
