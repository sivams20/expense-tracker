import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, fetchCategory, removeCategory } from "../../redux/category/categoryActions";

const Category = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);

    const onRemoveItem = (item) =>{
        const obj = { 'categoryId': item._id };
        dispatch(removeCategory(obj));
    }

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])

    const formik = useFormik({
        initialValues: {
          name: ''
        },
        onSubmit: values => {
          dispatch(addCategory(values));
        },
      });

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
            <input
                id="name"
                type="text"
                {...formik.getFieldProps('name')}
            />
            <button type="submit">Add</button>
            </form>
            <div>
                {categories.length && categories.map(item => (
                    <p key={item._id} onClick={() => {onRemoveItem(item);}}>{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Category;