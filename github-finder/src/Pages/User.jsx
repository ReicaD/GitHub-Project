import React from "react";
import { faCodepen, FaStore, FauserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/Layout/Spinner";

import GithubContext from "../Context/github/GithubContext";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
const params = useParams()
  useEffect(() => {
    getUser(params.login);
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return <div>{user.login}</div>;
}

export default User;
