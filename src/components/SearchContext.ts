import { createContext } from "react";
import { ISearchContext } from "../types/types";

//Создание контекста со значениями полей при инициализации
export const SearchContext = createContext<ISearchContext>({
    users: [],
    query: "",
    setQuery: () => {},
    loading: false,
    setLoading: () => {},
    error: "",
    firstLoad: true 
    });
