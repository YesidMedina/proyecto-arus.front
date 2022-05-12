import { createContext } from "react";
import { useContext, useState } from "react";
import { getComponent, postComponent } from "../services/Server";

export const ComponentContext = createContext();

export const ComponentInfo = ({ children }) => useContext(ComponentContext);
export const ComponentProvider = ({ children }) => {
  const [getComponent, postComponent] = useState({ data });
  const componentCreate = data;
  return <ComponentContext.Provider value={{}}>{children}</ComponentContext.Provider>;
};
