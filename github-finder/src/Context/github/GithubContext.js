import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";

//adding a token to render the users, use effect and fetchUsers function
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//this will set the initial state for the reducer function imported
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get search results
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {});
    const {items} = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //setting the loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  //the children passed here will be out put in the value of the user and ;loading
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
