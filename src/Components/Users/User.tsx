import React from "react";
import { NavLink } from "react-router-dom";

import s from './User.module.scss';



const User = (props:any) => {

return <div className={s.user}>
    <div>Имя {props.user.name}</div>
    <div>Город {props.user.address.city}</div>
    <div>Компания {props.user.company.bs}</div>
  <NavLink to={'Profile'+props.user.id}>Подробнее</NavLink>
</div>

}

export default User;