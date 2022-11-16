import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector } from "react-redux";

const SpendingContainer = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */

    display: flex;
    justify-content: center;
    align-items: center;
`

const SpendingForm = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 21px;
`

    const initialValues = {
      price: '0',
      category: '',
      date: new Date()
    };

    const validationSchema = Yup.object({
        price: Yup.string().required('Required'),
        category: Yup.string().required('Required'),
        date: Yup.string().required('Required'),
    })
    
    const onSubmit = values => {
        console.log(values);
    }

const Spending = ({ ...props }) => {
    const categories = useSelector(state => state.category.categories);
    return(
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <SpendingContainer>
                <SpendingForm>
                    <Field type="text" placeholder="price" id="price" name="price"/>
                    {/* <Field id="category" name="category">
                        {categories.map((option) => (
                        <option key={option._id} value={option.name}>{option.name}</option>
                        ))}
                    </Field> */}
                    <button>Add Expense</button>
                </SpendingForm>
            </SpendingContainer>
        </Formik>
    )
    
}

export default Spending;
