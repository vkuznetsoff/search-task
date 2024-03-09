import { createContext } from "react";
import { SearchContextType } from "../../types/types";

//Создание контекста для users - при инициализации приложения 
//массив пользователей пуст
export const SearchContext = createContext<SearchContextType>([]);
