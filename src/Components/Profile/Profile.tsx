import React from "react"
import { useParams } from "react-router-dom"
import { UserType } from "../../redux/reducers/users-reducer"


type Props = {
user: UserType | undefined
}

const Profile: React.FC<Props> = ({user}) => {
    
    
    return<div>
            
            <div>{}</div>
        </div>
    
}

export default Profile