import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl  my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          //  <p key={repo.id}>{repo.name}</p>
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
RepoList.protoTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;

{
  /* AllRepos(){
          if (!this.props.repos){
              return null;
          }return this.repos.map((repo)=> {
            return <div key={repo.id}>{repo.name}</div>
          })
        } */
}
