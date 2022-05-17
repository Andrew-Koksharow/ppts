import react from "react";
import User from "./User";

const List = ({users}:[]) => {
       
    return (
        <div>
            <h3>Список пользователей</h3>
            <div>
                {users.map(i  => 
                    <div>{i.name}</div>)}

            </div>
        </div>
    )
}

export default List;