import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({ baseURL: GITHUB_URL });
//setting the action for get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  //this will give us the response including the Json Data
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {});
  // const { items } = await response.json();

  // return items;
};

// //get single user and repos

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};

// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`);

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };
// //get user repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);

//   const data = await response.json();

//   return data;
// };

export const clearAllUsers = async (login) => {
  if (window.confirm("Are you sure you want to clear?")) {
  }
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos`);

  const data = await response.json();

  return data;
};
