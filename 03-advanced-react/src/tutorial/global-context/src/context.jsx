import { useContext, useState, createContext } from "react";

const GlobalContext = createContext(null);
export const useGobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {

    const [user, setUser] = useState({name:"Jonny", breed: "Doggo"});
    return <GlobalContext value={{user: user, setUser: setUser}}>
        { children }
        </ GlobalContext>
};

export default AppContext;