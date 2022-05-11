import { usersAPI } from "../../api/api";


const SET_USERS = 'SET_USERS';

// export type InitialStateType = {
//     users: {
//         name: string
//     };
// }

let initialState: any = {
    users: {
        name: ''
    }
}

const UsersReducer = (state = initialState, action: any): any => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }


}

export default UsersReducer;


export const setUsers = (user:any) => {
    return {
      type: SET_USERS,
      users: user
    }
}

// const users = usersAPI.getUsers()

//     const sa = users.then((response:any) => {
//         console.log(response.request.response)
//     }) 


export const getUsersThunkCreator = () => {
    return (dispatch:any) => {
     let users  = usersAPI.getUsers()
      users.then((response:any)=> {
            dispatch(setUsers(response))
        })

    }
}


export const getUsers = (state:any) => {
    return state.usersPage.users
}

