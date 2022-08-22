import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

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

const Spending = ({ ...props }) => {
    const [date, setDate] = useState(new Date());
    const options = [
        { id: 1, value: 'fruit' },
        { id: 2, value: 'vegetable' },
        { id: 3, value: 'meat' },
    ];

    const formik = useFormik({
        initialValues: {
          price: '123',
          category: 'meat',
          date: new Date()
        },
        validationSchema: Yup.object({
            price: Yup.string().required('Required'),
            category: Yup.string().required('Required'),
            date: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
            console.log(date);
        },
    });
    return(
        <Formik>
            <SpendingContainer>
                <SpendingForm onSubmit={formik.handleSubmit}>
                    <input type="text" placeholder="price" id="price" name="price" {...formik.getFieldProps('price')} />
                    <select id="category" name="category" {...formik.getFieldProps('category')}>
                        {options.map((option) => (
                        <option key={option.id} value={option.value}>{option.value}</option>
                        ))}
                    </select>
                    {/* <DatePicker selected={date} dateFormat="MMMM d, yyyy" name="date" onChange={e => { setFieldValue("date", e)}} /> */}
                    {/* <DatePicker {...field} name="date" placeholder="Date" selected={date} dateFormat="MMMM d, yyyy" onChange={(e) => { setFieldValue(field.name, e) }} /> */}
                    {/* <DatePicker name="date" selected={date} onChange={e => {}} /> */}
                    {/* <DatePicker selected={date} onChange={(date) => setDate(date)} id="date" name="date" /> */}
                    {/* <DatePicker {...field} {...props} selected={(field.value && new Date(field.value)) || null}
                    onChange={val => { setFieldValue(field.name, val);}} /> */}
                    <button type="submit">Add Expense</button>
                </SpendingForm>
            </SpendingContainer>
        </Formik>
    )
    
}

export default Spending;
