import React from "react";
import { connect } from "react-redux";
import { getUsers, getUsersThunkCreator, UserType } from "../../redux/reducers/users-reducer";
import { AppStatetype } from "../../redux/redux-store";

import List from "./List";

type PropsType = {
    getUsersThunkCreator: any
    users: Array<UserType>
}

class listApiComponent extends React.Component<PropsType> {
    // constructor(props:PropsType) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.getUsersThunkCreator();
    }

    

render() {
    
    return <List users={this.props.users}/>
} 
} 


let mapStateToProps = (state: AppStatetype) => {
    
    return {
        users: getUsers(state)
            }
}

const ListContainer = connect(mapStateToProps,{getUsersThunkCreator})(listApiComponent)

export default ListContainer