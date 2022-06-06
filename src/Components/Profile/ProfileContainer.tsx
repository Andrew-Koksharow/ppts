import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppStatetype } from "../../redux/redux-store"
import Profile from "./Profile"



type Props = {

}

const ProfileContainer: React.FC<Props> = () => {
  let { UserId } = useParams() ?? '';

  let userId = Number(UserId)
  const user = useSelector((state: AppStatetype) => state.usersPage.users)
    .find(
      (user) => {

        return user.id === userId
      }

    )


  return <div>
    {<Profile user={user} />}

  </div>

}

export default ProfileContainer;