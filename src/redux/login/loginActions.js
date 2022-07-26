import axios from "axios"
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

export const loginUser = (credential) =>{
    console.log('credential', credential);
    return (dispatch)=>{
        dispatch(login());
        const url = 'http://localhost:5000/user/signin';
        axios.post(url, credential)
        .then(response =>{
            console.log(response)
            //dispatch(loginSuccess(response));
        })
        .catch(error => {
            console.log(error);
            //const errorMessage = error;
            //dispatch(loginFailure(errorMessage));
        })
    }
}
