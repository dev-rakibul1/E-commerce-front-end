import React, { createContext } from "react";

export const GlobalContextProvider = createContext();
const GlobalContext = ({ children }) => {
  return (
    <div>
      <GlobalContextProvider.Provider>
        {children}
      </GlobalContextProvider.Provider>
    </div>
  );
};

export default GlobalContext;
