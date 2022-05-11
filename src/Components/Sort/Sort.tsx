import React from "react";
import { usersAPI } from "../../api/api";
import Button from "../Button/Button";



const func = () => {

    const users = usersAPI.getUsers()

    const sa = users.then((response:any) => {
        console.log(response.request.response)
    }) 

    //
}

const Sort = () => {
    return (
        <div>
            <h3>Сортировка</h3>
            <div>
                <Button onclick={func} />
                <Button onclick={func} />
            </div>
        </div>
    )
    }
          
export default Sort;