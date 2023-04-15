const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

//get search results
export const searchUsers = async (text) => {
  
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {});
  const { items } = await response.json();
  
  return items;
};
