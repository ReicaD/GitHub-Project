import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
  const initialState = null
//set alert

  const [state, dispatch] = useReducer(alertReducer, initialState);

  return <AlertContext.Provider value={{alert:state}}>
{children}
  </AlertContext.Provider>
};
export default AlertContext;