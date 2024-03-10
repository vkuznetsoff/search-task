import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { UsersType } from "./types/types";
import { fetchUser } from "./utils/api";
import { Error } from "./components/Error/Error";

const App: React.FC = () => {
  const [users, setUsers] = useState<UsersType>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("");
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
 
  //Создаем объект для передачи в Провайдер контекста
  const value = { users, query, setQuery, loading, setLoading, error, firstLoad }

  useEffect(() => {
    //Проверка на самую первую загрузку данных
    if (firstLoad) {
      setFirstLoad(false)
    }

    (async () => {
      try {
        setLoading(true);
        const users = await fetchUser(query);
        setUsers(users.users);
      } catch (error) {
        setError(String(error));
      } finally {
        setLoading(false);
      }
    })();
  }, [query])

  return (
    <SearchContext.Provider value={value} >
      <SearchForm />
      {error ? <Error /> : <SearchResults />}
    </SearchContext.Provider>
  );
}

export default App
