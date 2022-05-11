import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-reducer';
import UsersReducer from './reducers/users-reducer';


const store = configureStore({
    reducer: {
        usersPage: UsersReducer,
        app: appReducer
    }
})


export default store;

