// import { useEffect } from "react";
import {useContext } from "react";
import Spinner from "../Layout/Spinner";
// import Spinners from "../Layout/Spinner";
import UserItems from "../users/UserItems";
import GithubContext from "../../Context/github/GithubContext";

function UserResult() {
  const { users, loading} = useContext(GithubContext);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
export default UserResult;

// <div>
//   {loading ? (
//     <p>Loading...</p>
