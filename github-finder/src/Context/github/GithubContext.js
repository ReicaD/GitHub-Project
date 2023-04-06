import { createContext, useReducer, useState } from "react";
import githubReducer from "../github/GithubReducers";

//adding a token to render the users, use effect and fetchUsers function
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

//this will set the initial state for the reducer function imported
// export const UserProvider = ({ children }) => {
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    blogs: [],
    loading: false,
  };
  const [clear, setClear] = useState([]);

  const clearUsers = () => {
    setClear([]);
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get search results
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {});
    const { items } = await response.json();
    //calls the reducer type
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const clearAllUsers = () => {
    if (window.confirm("confirm to clear")) {
      dispatch({
        type: "REMOVE_USERS",
        payload: [],
      });
    }
  };
  //get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`);

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  
  };

  // console.log("all we",state)

  //setting the loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  //the children passed here will be out put in the value of the user and ;loading
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        clearUsers,
        searchUsers,
        clearAllUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
