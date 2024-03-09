import React, { useState, useRef } from "react";
import SearchForm  from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { IUser, IUsers, UsersType } from "./types/types";



 const App: React.FC = () =>  {
  const [users, setUsers] = useState<UsersType>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false)

  const firstLoad = useRef(true) 

  return (
    <SearchContext.Provider value ={{users, setUsers, isLoad, setIsLoad, firstLoad } } >
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}

export default  App
