import axios from "axios"
import { ADD_CATEGORY_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS } from "./categoryActionTypes"

export const fetchCategoryRequest = () => {
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}

export const fetchCategorySuccess = (categories) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: categories
    }
}

export const fetchCategoryFailure = () => {
    return {
        type: FETCH_CATEGORY_FAILURE
    }
}

export const addCategoryRequest = (category) => {
    return {
        type: ADD_CATEGORY_REQUEST,
        payload: category
    }
}

export const addCategoryFailure = () => {
    return {
        type: ADD_CATEGORY_FAILURE
    }
}

export const addCategorySuccess = (category) => {
    return {
        type: ADD_CATEGORY_SUCCESS,
        payload: category
    }
}

export const fetchCategory = () =>{
    return (dispatch)=>{
        dispatch(fetchCategoryRequest());
        const url = 'http://localhost:5000/category/categories';
        axios.get(url)
        .then(response =>{
            dispatch(fetchCategorySuccess(response.data.categories));
        })
        .catch(error => {
            console.log(error);
            const errorMessage = error;
            dispatch(fetchCategoryFailure(errorMessage));
        })
    }
}

export const addCategory = (data) => {
    return (dispatch) => {
        dispatch(addCategoryRequest(data));
        const url = 'http://localhost:5000/category/add';
        axios.post(url, data)
        .then(response =>{
            dispatch(fetchCategorySuccess(response.data));
        })
        .catch(error => {
            console.log(error);
            const errorMessage = error;
            dispatch(fetchCategoryFailure(errorMessage));
        })
    }
}
