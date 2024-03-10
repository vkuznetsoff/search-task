import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../SearchContext";
import { UserCard } from "../UserCard/UserCard";
import { ISearchContext } from "../../types/types";
import { Empty } from "./Empty";
import preloader from "../../img/indicator-big-2.gif"
import "./style.css";

export const SearchResults: React.FC = () => {

  const { users, firstLoad, loading } = useContext<ISearchContext>(SearchContext);

  const [page, setPage] = useState<number>(0)

  /* создание IntersectionObserver для плавного отображение содержимого(карточек)
  при прокрутке страницы.
  В данном проекте это не очень актуально, так как даных мало, но если, например,
  запрашивать данные по АПИ, где приходит большое количество данных для отображения,
  то это может быть актуально
  */
  const observerTarget = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  //Отображение сообщение, чито ничего не найдено в случае, если это не при запуске
  // приложения и загрузка завершена
  if (users.length == 0 && !firstLoad && !loading) return <Empty />

  return (
    <div className="usersList">
      {
        !loading ? users.slice(0, page * 9).map((user) => (
          <UserCard {...user} key={user.id} />
        ))
          : <img src={preloader} />
      }
      <div ref={observerTarget}></div>
    </div>

  );
}
