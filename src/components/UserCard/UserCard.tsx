import React from "react";
import "./style.css";
import { IUser } from "../../types/types";

type UserCardProps = IUser

//Добавил чуть большей полей в карточки, показалось, 
// что не хватает дополнительной информации о пользователях
export const  UserCard: React.FC<UserCardProps> = (props: IUser) => {
  
  return (
    <div className="userCard">
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div><strong>Name: </strong>{`${props.firstName} ${props.lastName}`}</div>
        <div><strong>Address: </strong>{props.address.city}</div>
        <div className="divider"></div>
        <div><i>Username: </i>{props.username}</div>
        <div><i>Email: </i>{props.phone}</div>
      </div>
    </div>
  );
}
