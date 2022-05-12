import { createContext } from "react";
import { useContext, useState } from "react";
import{getUser, postUser} from "../services/User";

export const UserContext = createContext();

export const useInfo = ({ children }) => useContext(UserContext);
export const UserProvider = ({ children }) => {
    const [getUser, postUser] = useState({data});
    const userCreate = (data)
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
