import { useContext } from "react"
import { SearchContext } from "../SearchContext"
import "./error.css"

export const Error = () => {
    const {error} = useContext(SearchContext)

    return <h3 className="error">{error}</h3>
}