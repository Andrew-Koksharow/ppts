import React from "react";
import { Link, NavLink } from "react-router-dom";

import s from './User.module.scss';



const User = (props:any) => {

return <div className={s.user}>
    <div>Имя {props.user.name}</div>
    <div>Город {props.user.address.city}</div>
    <div>Компания {props.user.company.bs}</div>
  <Link to={`Profile/${props.user.id}`}>link</Link>
</div>

}

export default User;