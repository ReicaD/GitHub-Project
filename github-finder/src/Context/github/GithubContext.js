import { createContext, useReducer, useState } from "react";
import githubReducer from "../github/GithubReducers";

//this will set the initial state for the reducer function imported
// export const UserProvider = ({ children }) => {
  const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    blogs: [],
    loading: false,
  };
  // const [setClear] = useState([]);

  // const clearUsers = () => {
  //   setClear([]);
  // };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  //the children passed here will be out put in the value of the user and ;loading
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
