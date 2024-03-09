import React from "react";
import "./style.css";
import { IUser, UsersType } from "../../types/types";

type UserCardProps = IUser


export const  UserCard: React.FC<UserCardProps> = (props: IUser) => {
  return (
    <div className="userCard">
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}
