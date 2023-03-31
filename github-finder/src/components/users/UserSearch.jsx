import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../Context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");

  //acsess to users array making sure its not empty
  const { users } = useContext(GithubContext);

  //updates the state on the texte that is typed in by targeting the value
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    //validation to confirm if data subjected exists
    if (text === "") {
      alert("Warning:type in something");
    } else {
      //@todo search user
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* if users are available the condition below will display */}
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
