import { USER_LOGGED_IN, USER_REGISTERED, REGISTER_FAIL, LOGIN_FAIL } from "../constants/userTypes";


export const userReducer = (state: any = {}, action: any) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return action.payload
        case LOGIN_FAIL:
            return {errorLogin: action.payload}
        case USER_REGISTERED:
            return action.payload
        case REGISTER_FAIL:
            return {error: action.payload}
        default:
            return state
    }
}


