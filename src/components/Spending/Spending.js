import React, { useEffect } from "react";
// import styled from "styled-components";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Formik, Field, Form, ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import TextError from "../Error/TextError";
import { fetchCategory } from "../../redux/category/categoryActions";

// const SpendingContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const SpendingForm = styled.form`
//     width: 500px;
//     display: flex;
//     flex-direction: column;
//     gap: 21px;
// `;

const initialValues = {
  date: new Date(),
  amount: "0",
  category: "",
  note: "",
};

const validationSchema = Yup.object({
  date: Yup.string().required("Required"),
  amount: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  note: Yup.string().required("Required"),
});

const onSubmit = (values) => {
  console.log(values);
};

function Spending() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategory());
    }
  });

  console.log(categories);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* <SpendingContainer> */}
      <Form>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <Field type="text" id="amount" name="amount" />
          <ErrorMessage name="amount" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <Field as="select" id="category" name="category">
            {categories.map((category) => (
              <option key={category._id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="category" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="note">Note</label>
          <Field type="text" id="note" name="note" />
          <ErrorMessage name="note">
            {(errorMssg) => <div className="error">{errorMssg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <Field name="date">
            {({ form, field }) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <DateView
                  id="date"
                  selected={value}
                  onChange={(val) => setFieldValue("date", val)}
                  dateFormat="dd/MM/yyyy"
                />
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name="date" />
        </div>
        <button>Add Expense</button>
      </Form>
      {/* </SpendingContainer> */}
    </Formik>
  );
}

export default Spending;
