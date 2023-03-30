import { createContext,useState } from "react";

 //adding a token to render the users, use effect and fetchUsers function
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {});
    const data = await response.json();
    setUsers(data)
    setLoading(false)
  };
//the children passed here will be out put in the value of the user and ;loading
  return <GithubContext.Provider value ={{
    users,loading,fetchUsers
  }}>
    {children}
</GithubContext.Provider>
};
export default GithubContext;