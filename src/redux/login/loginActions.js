import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./loginActionTypes"


export const login = () => {
    return{
        type: LOGIN
    }
}

export const loginSuccess = (token) => {
    return{
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const loginFailure = (message) => {
    return{
        type: LOGIN_FAILURE,
        payload: message
    }
}

export const logout = () => {
    return{
        type: LOGOUT
    }
}