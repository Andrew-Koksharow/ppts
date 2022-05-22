import react from "react";
import { UserType } from "../../redux/reducers/users-reducer";
import User from "./User";

type Props = {
    users: Array<UserType>
}

const List: React.FC<Props> = ({users}) => {
   
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