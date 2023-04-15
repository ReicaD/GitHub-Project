import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../Context/github/GithubContext";
import AlertContext from "../../Context/alert/AlertContext";
import { searchUsers } from "../../Context/github/GIthubActions";
function UserSearch() {
  //set text is added for submitting the search from the context store
  const [text, setText] = useState("");

  //acsess to users array making sure its not empty
  const { users, clearAllUsers, dispatch } = useContext(GithubContext);

  //this function  will help to fire the alert
  const { setAlert } = useContext(AlertContext);

  //updates the state on the texte that is typed in by targeting the value
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation to confirm if data subjected exists
    if (text === "") {
      setAlert("Warning:type in something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      //@todo search user
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
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
          <button onClick={clearAllUsers} className="btn btn-ghost btn-lg">
            Clear Users
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
