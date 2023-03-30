import React from "react";
import UserResult from "../components/users/UserResult";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      {" "}
      <strong>
        <UserSearch/>
        <UserResult />
      </strong>
      {/* {process.env.REACT_APP_GITHUB_URL} */}
    </>
  );
}

export default Home;
