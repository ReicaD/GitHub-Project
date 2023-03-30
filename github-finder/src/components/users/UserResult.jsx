// import { useEffect } from "react";
import { useEffect,useState } from "react";
// import Spinner from "../Layout/Spinner";
import Spinners from "../Layout/Spinner"
import UserItems from "../users/UserItems"

function UserResult() {
  const[users,setUsers]=useState([])
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    fetchUsers();
  }, []);

  //adding a token to render the users, use effect and fetchUsers function
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    });
    const data = await response.json();
    setUsers(data)
    setLoading(false)
  };
  
  // headers: {
  //   Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  // },
// console.log("this is", users);

if(!loading){
  return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
          <UserItems key={user.id} user={user}/>
            ))}
        </div>
      
  )
}else{
  return <Spinners/>
}
    
  }
  export default UserResult;
  
  
  
  
  
  
  
  
  
        // <div>
        //   {loading ? (
        //     <p>Loading...</p>