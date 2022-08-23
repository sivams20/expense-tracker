import axios from "axios"
import { FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS } from "./categoryActionTypes"

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
