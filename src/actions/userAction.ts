import { USER_LOGGED_IN, USER_REGISTERED, REGISTER_FAIL, LOGIN_FAIL } from './../constants/userTypes';
import axios from 'axios'




const userLoggedIn = (email: string, password: string) => async(dispatch: any):Promise<void> => {
    try{
        const {data}= await  axios.post('/api/user/sign-in', {email, password})
        dispatch({
            type: USER_LOGGED_IN,
            payload: data
        })
    }catch(err){
        dispatch({type: LOGIN_FAIL, payload: err.response.data.message})
    }
}

const userRegistered = (username: string, email: string, password: string) => async(dispatch: any):Promise<void> => {
    try{
        const {data}= await  axios.post('/api/user/register', {username, email, password})
        dispatch({
            type: USER_REGISTERED,
            payload: data
        })
    }catch(err){
        dispatch({type: REGISTER_FAIL, payload: err.response.data.message})
    }
}



export {
    userLoggedIn, 
    userRegistered
}