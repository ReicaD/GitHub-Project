import React from "react";
import UserResult from "../components/users/UserResult";

function Home() {
  return (
    <>
      {" "}
      <strong>
        {/* SEARCH COMPONENTS HERE! */}
        <UserResult />
      </strong>
      {/* {process.env.REACT_APP_GITHUB_URL} */}
    </>
  );
}

export default Home;
