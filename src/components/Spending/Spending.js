import React, { useEffect } from "react";
// import styled from "styled-components";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import TextError from "../Error/TextError";
import { fetchCategory } from "../../redux/category/categoryActions";
import {
  addSpending,
  hideSpendingSuccessDialog,
  updateSpending
} from "../../redux/spending/spendingActions";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Spending(props) {
  //const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const open = useSelector((state) => state.spending.success);
  const spendings = useSelector((state) => state.spending.spendings);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const validationSchema = Yup.object({
    date: Yup.string().required("Required"),
    amount: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    note: Yup.string().required("Required")
  });

  const onSubmit = (values) => {
    //setOpen(true);
    if (id) {
      const spending = { spendingId: id };
      const obj = { ...spending, ...values };
      dispatch(updateSpending(obj));
    } else {
      dispatch(addSpending(values));
    }
  };

  const handleClose = () => {
    dispatch(hideSpendingSuccessDialog());
  };

  const getData = () => {
    let initialValues = {
      date: new Date(),
      amount: "0",
      category: "",
      note: ""
    };
    if (id) {
      const spending = spendings.filter((spending) => spending._id === id);
      initialValues = {
        date: new Date(spending[0].date),
        amount: spending[0].amount,
        category: spending[0].category,
        note: spending[0].note
      };
    }

    return initialValues;
  };

  return (
    <>
      <Formik
        initialValues={getData()}
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
                <option key={category._id} value={category._id}>
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
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Spendings saved/updated successfully.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Spending;
