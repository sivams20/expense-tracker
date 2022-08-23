import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/category/categoryActions";

const Category = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    console.log(categories);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])

    return(
        <div>
            Category
            <div>
                {categories.map(item => (
                    <p key={item._id}>{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Category;