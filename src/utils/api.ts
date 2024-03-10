const api = import.meta.env.VITE_API_URL;

export const fetchUser = async (query: string) => {
  const response = await fetch(`${api}/users/search?q=${query}`);

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};
