import { usersAPI } from "../../api/api";
import { AppStatetype } from "../redux-store";


const SET_USERS = 'SET_USERS';

export type UserType = {
    
        name: string,
        address: {
            city: string,
            geo: {}
            street: string,
            suite: string,
            zipcode: string
        },
        company: {
            bs: string,
            catchPhrase: string
        },
        email: string,
        id: number,
        phone: string,
        username: string,
        website: string
    
}
////



let initialState  = {
    users: [] as Array<UserType>
}

type InitialStateType = typeof initialState;

const UsersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,

            }
        default:
            return state
    }


}

export default UsersReducer;

type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType> 
}

export const setUsers = (users: Array<UserType>): setUsersActionType => {
    
    return {
        type: SET_USERS,
        users: users
    }
}



export const getUsersThunkCreator = () => {
    return (dispatch: any) => {
        let users = usersAPI.getUsers();
        users.then((response: any) => {
            dispatch(setUsers(response))
            
        })

    }
}


export const getUsers = (state: AppStatetype) => {
    return state.usersPage.users
}

