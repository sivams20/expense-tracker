import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import TextError from "../Error/TextError";
//import { useDispatch } from "react-redux";

const SignupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Button = styled.button`
  width: 100px;
  padding: 3px;
  border-radius: 5px;
  align-self: center;
`;

function Signup() {
  console.log(salt);
  //const dispatch = useDispatch();
  let initialValues = {
    email: "",
    password: "",
    confirm: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Your password is too short."),
    confirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <SignupContainer>
          <SignupForm>
            <Form>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <Field type="password" id="confirm" name="confirm" />
                <ErrorMessage name="confirm" component={TextError} />
              </div>
              <Button type="submit">Signup</Button>
            </Form>
          </SignupForm>
        </SignupContainer>
      </Formik>
    </>
  );
}

export default Signup;
