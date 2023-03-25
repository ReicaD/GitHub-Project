// import { useEffect } from "react";
import { useEffect } from "react";

function UserResult() {
  useEffect(() => {
    fetchUsers();
  }, []);

  //adding a token to render the users, use effect and fetchUsers function
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    });
    const data = await response.json();
    console.log("this is data", data);
    // console.log("TOKEN",process.env.REACT_APP_GITHUB_TOKEN);
    // console.log(process.env.REACT_APP_GITHUB_URL);
  };

  return <div>UserResult</div>;
}

export default UserResult;

// function UserResult() {
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   //adding a token to render the users, use effect and fetchUsers function
//   const fetchUsers = async () => {
//     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
//       headers: {
//         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//       },
//     })
//     const data = await response.json();
//     console.log("one life",data);
//   };
//   return;
//   <div>UserResult</div>;
// }

// export default UserResult;
