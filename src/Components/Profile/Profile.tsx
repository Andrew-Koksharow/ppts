import React, { useState } from "react"
import { UserType } from "../../redux/reducers/users-reducer"
import Button from "../Button/Button"
import ProfileDataBlock from "./ProfileDataBlock"


type Props = {
    user: UserType | undefined
}

const Profile: React.FC<Props> = ({ user }) => {

    let [editMode , setEditMode] = useState(false);

    return (
        <>{editMode? <ProfileDataBlock/> :
    <section>

        <div>name: {user?.name}</div>
        <div> 
            <span> city: {user?.address.city} </span>
            <span> street: {user?.address.street} </span>
        </div>
        <div>company: {user?.company.bs} </div>
        <div>email: {user?.email}</div>
        <div>phone: {user?.phone}</div>
        
        <Button name='edit' onclick={()=>setEditMode(true)}/>
      

    </section>}
    </>  )
}

export default Profile