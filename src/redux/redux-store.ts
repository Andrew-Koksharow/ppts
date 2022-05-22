import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-reducer';
import UsersReducer from './reducers/users-reducer';


const store = configureStore({
    reducer: {
        usersPage: UsersReducer,
        app: appReducer
    }
})


export type AppStatetype = ReturnType<typeof store.getState>



export default store;

