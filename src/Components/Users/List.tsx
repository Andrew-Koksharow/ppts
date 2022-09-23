import React from "react";
import { UserType } from "../../redux/reducers/users-reducer";
import User from "./User";
import item from './List.module.scss'
type Props = {
    users: Array<UserType>
}

const List: React.FC<Props> = ({ users }) => {

    return (
        <div>
            <h3>List of users</h3>
            <div>

                {users.map(i =>
                    <div className={item.user}>
                        <User
                            key={i.id}
                            user={i} />
                    </div>)}
            </div>
        </div>
    )
}

export default List;