import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addCategory,
  fetchCategory
} from "../../redux/category/categoryActions";
//import bin from "../../images/delete.png";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryItem = styled.div`
  width: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 15px 5px;
  margin-top: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5em 3em;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  transition: all 0.15s;
`;

// const BinIcon = styled.img`
//   width: 13px;
//   height: 13px;
//   margin-left: 5px;
// `;

function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  // const onRemoveItem = (item) => {
  //   const obj = { categoryId: item._id };
  //   dispatch(removeCategory(obj));
  // };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values, onSubmitProps) => {
      if (values.name) {
        dispatch(addCategory(values));
        onSubmitProps.resetForm();
      }
    }
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <input id="name" type="text" {...formik.getFieldProps("name")} />
        <Button type="submit">Add</Button>
      </Form>
      <CategoryContainer>
        {categories.length > 0 &&
          categories.map((item) => (
            <CategoryItem key={item._id}>
              {item.name}
              {/* <BinIcon
                src={bin}
                alt="delete"
                onClick={() => {
                  onRemoveItem(item);
                }}
              /> */}
            </CategoryItem>
          ))}
      </CategoryContainer>
    </div>
  );
}

export default Category;
