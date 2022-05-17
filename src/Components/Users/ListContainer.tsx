import React from "react";
import { connect } from "react-redux";
import { getUsers, getUsersThunkCreator, InitialStateType } from "../../redux/reducers/users-reducer";
import List from "./List";



class  listApiComponent extends React.Component<>  {
    constructor(props:[]) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator();
    }

    

render() {
    return <List users={this.props.user}/>
} 
} 


let mapStateToProps = (state:InitialStateType) => {
    
    return {
        user: getUsers(state)
    }
}

const ListContainer = connect(mapStateToProps,{getUsersThunkCreator})(listApiComponent)

export default ListContainer