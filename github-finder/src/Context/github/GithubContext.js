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
    repos: [],
    blogs: [],
    loading: false,
  };
  const [setClear] = useState([]);

  const clearUsers = () => {
    setClear([]);
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  

  const clearAllUsers = () => {
    if (window.confirm("Are you sure you want to clear?")) {
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
  //get user repos
  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`
    );

    const data = await response.json();

    //calls the reducer type
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  //setting the loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  //the children passed here will be out put in the value of the user and ;loading
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers,
        clearAllUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
