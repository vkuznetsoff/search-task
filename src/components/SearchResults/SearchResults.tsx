import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";
import Empty from "./Empty"

import preloader from "../../img/indicator-big-2.gif"
import "./style.css";

export const  SearchResults : React.FC = () => {
  const { users, isLoad, firstLoad } = useContext(SearchContext);
  

  if (users.length == 0 && !firstLoad.current)  return <Empty />

  return (
    <div className="usersList">
      {
        !isLoad ? users.map((user) => (
          //добавление key
          <UserCard {...user} key={user.id} />
        ))
          : <img src={preloader} />//<h2>Loading...</h2>
      }

    </div>

  );
}
