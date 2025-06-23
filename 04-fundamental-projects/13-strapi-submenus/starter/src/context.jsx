import { useState, useContext, createContext } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
  const [pageId, setPageId] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <Context.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useAppContext = () => useContext(Context);
export default AppContext;
