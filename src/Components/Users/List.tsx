import React, { useEffect } from "react";


import User from "./User";




const List = (props: any) => {
    debugger
    let arr = [];
    for (let i = 0; i < props.users.length; i++) {
        arr.push(props.users[i])
    }

    return (
        <div>
            <h3>Список пользователей</h3>
            <div>





            </div>
        </div>
    )
}

export default List;