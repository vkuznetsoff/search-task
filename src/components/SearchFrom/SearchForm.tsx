import { useState, useEffect, useContext, useCallback } from "react";
import "./styles.css";
import { SearchContext } from "../SearchResults/SearchContext";
import {useDebounce} from "../../hooks/useDebounce"
import { SearchContextType, UsersType } from "../../types/types";

const URL = "https://dummyjson.com/users1/search?q=";


const SearchForm: React.FC<{}> = () => {
  //Создание стейта для строки запроса
  const [query, setQuery] = useState<String>("");
 

  //Получаем данные из контекста
  const { setUsers, setIsLoad, firstLoad } = useContext<SearchContextType>(SearchContext);

  /* Создаем debounce для строки запроса - учитывается запрос, 
  когда прошло не менее 1 секунды от последнего нажатия клавиши в поле поиска
  */
  const debounceQuery = useDebounce(query, 700)
  
  //Асинхронная функция запроса на сервер
  const fetchUser = async (query: String )  => {
    let response = await fetch(`${URL}${query}`)

    if (response.ok) {
      let result = (await response.json()) 
      setIsLoad(false)
      setUsers(result.users);
      
    } else {
      console.log("Ошибка запроса: " + response.status);
    }
  };

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    fetchUser(debounceQuery)  
  }, [debounceQuery]);

  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          placeholder="Введите запрос..."
          value={query}
          onChange={(e) => {
            setIsLoad(true)
            setQuery(e.target.value)}}
        />
      </form>
    </div>
  );
}

export default SearchForm