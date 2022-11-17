import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from "react-redux";

const SpendingContainer = styled.div`
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
        date: new Date(),
        amount: '0',
        category: '',
        note: ''
    };

    const validationSchema = Yup.object({
        date: Yup.string().required('Required'),
        amount: Yup.string().required('Required'),
        category: Yup.string().required('Required'),
        note: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log(values);
    }

const Spending = ({ ...props }) => {
    //const categories = useSelector(state => state.category.categories);
    return(
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {/* <SpendingContainer> */}
                <Form>
                    <div>
                        <label htmlFor="">Amount</label>
                        <Field type="text" id="amount" name="amount" />
                        <ErrorMessage name="amount" />
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <Field type="text" id="category" name="category" />
                        <ErrorMessage name="category" />
                    </div>
                    <div>
                        <label htmlFor="">Note</label>
                        <Field type="text" id="note" name="note" />
                        <ErrorMessage name="note" />
                    </div>
                    <button>Add Expense</button>
                </Form>
            {/* </SpendingContainer> */}
        </Formik>
    )
    
}

export default Spending;
