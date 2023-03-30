import { createContext, useReducer } from "react";
import githbReducer from "./GithubReducers";

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
  const [state, dispatch] = useReducer(githbReducer, initialState);

  
//getting initial users(testing purposes)
  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {});
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  //setting the loading
  const setLoading =()=> dispatch({type:"SET_LOADING"})
  //the children passed here will be out put in the value of the user and ;loading
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading:state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
