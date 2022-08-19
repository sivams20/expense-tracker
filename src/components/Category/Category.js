import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/category/categoryActions";

const Category = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])

    return(
        <div>
            Category
        </div>
    )
}

export default Category;