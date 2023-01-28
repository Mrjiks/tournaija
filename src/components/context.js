import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setMenu] = React.useState(false);

  const toggleMenu = () => {
    setMenu(() => !showMenu);
  };
  const closeMenu = () => {
    if (showMenu) {
      setMenu(() => !showMenu);
    }
  };
  // prettier-ignore
  return (
    <AppContext.Provider value={{showMenu,toggleMenu,closeMenu,}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook for using the created contextAPI without frequently calling useContext
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
