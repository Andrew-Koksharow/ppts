import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUsers } from "../../redux/reducers/users-reducer"
import { AppStatetype } from "../../redux/redux-store"
import Profile from "./Profile"



type Props = {

}

const ProfileContainer: React.FC<Props> = () => {
     let params = useParams();
        // let i:number = parseInt(params.UserId,10);

  const user = useSelector((state:AppStatetype) => state.usersPage.users)
  .find(
      (user) => {
         
       return user.id === params.UserId}
       
  )
  

    return<div>
{/*             
        <Profile user={user}/> */}
        {user?.name}
        </div>
    
}

export default ProfileContainer;