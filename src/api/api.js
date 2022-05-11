import * as axios from 'axios';


const instance  = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: 'json'
})

export const usersAPI = {
    
    getUsers() {
        
        return instance.get('/users')
        .then(response => {
            const users = response.data; 
            return users;
        })
        
    }
}
