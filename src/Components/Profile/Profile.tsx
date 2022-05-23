import React from "react"
import { useParams } from "react-router-dom"

type Props = {

}

const Profile: React.FC<Props> = () => {
    let params = useParams();
    return<div>
            <div>{params.Id}</div>
            <div>123</div>
        </div>
    
}

export default Profile