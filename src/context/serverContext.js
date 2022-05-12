import { createContext } from "react";
import { useContext, useState } from "react";
import { getServer, postServer } from "../services/Server";

export const ServerContext = createContext();

export const ServeInfo = ({ children }) => useContext(ServerContext);
export const ServerProvider = ({ children }) => {
  const [getServer, postServer] = useState({ data });
  const serverCreate = data;
  return <ServerContext.Provider value={{}}>{children}</ServerContext.Provider>;
};
