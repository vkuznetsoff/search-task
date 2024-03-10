import { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import { SearchContext } from "../SearchContext";
import { ISearchContext } from "../../types/types";
import { useDebounce } from "../../hooks/useDebounce";
import "./styles.css";


const SearchForm: React.FC<{}> = () => {

  const [input, setInput] = useState<string>('')

  //Получаем данные из контекста
  const { setQuery, setLoading } = useContext<ISearchContext>(SearchContext);

  /* Создаем debounce для строки запроса - учитывается запрос, 
  когда прошло не менее 1 секунды от последнего нажатия клавиши в поле поиска
  */
  const debounceQuery = useDebounce(input, 700)

  useEffect(() => {
    setQuery(debounceQuery)
  }, [debounceQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {    
    setInput(e.target.value)
    setLoading(true)
  }

  const handleSubmit = (e: FormEvent) => {
    //Блокируем нажатие клавиши Ввода в поисковой строке
    e.preventDefault()
  }


  return (
    <div className="searchForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          placeholder="Введите запрос..."
          value={input}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default SearchForm