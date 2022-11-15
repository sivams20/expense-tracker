import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCategory, fetchCategory, removeCategory } from "../../redux/category/categoryActions";
import bin from "../../images/delete.png";

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CategoryItem = styled.div`
    width: 500px;
    margin: 10px;
`

const BinIcon = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 5px;
`

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
        onSubmit: (values, onSubmitProps) => {
          dispatch(addCategory(values));
          onSubmitProps.resetForm();
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
            <CategoryContainer>
                {categories.length > 0 && categories.map(item => (
                    <CategoryItem key={item._id} >{item.name} 
                        {/* <BinIcon></BinIcon> */}
                        <BinIcon src={bin} alt="delete" onClick={() => {onRemoveItem(item);}} />
                    </CategoryItem>
                ))}
            </CategoryContainer>
        </div>
    )
}

export default Category;