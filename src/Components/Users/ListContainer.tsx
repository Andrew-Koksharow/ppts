import React from "react";
import { connect } from "react-redux";
import { getUsers, getUsersThunkCreator } from "../../redux/reducers/users-reducer";
import List from "./List";



class  listApiComponent extends React.Component<any>  {

    componentDidMount() {
        this.props.getUsersThunkCreator();
    }

render() {
    return <div>
    <List users={this.props.users}/>
</div>
} 
} 


let mapStateToProps = (state:any) => {
    
    return {
        users: getUsers(state)
    }
}

const ListContainer = connect(mapStateToProps,{getUsersThunkCreator})(listApiComponent)

export default ListContainer