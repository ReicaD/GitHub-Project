import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItems({ user: { login, avatar_url } }) {
  return (
    <div>
      <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/{login}`}
          ></Link>
        </div>
      </div>
    </div>
  );
}
UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItems;
