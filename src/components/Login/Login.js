import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/login/loginActions";

const LoginContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #1890ff;
  padding: 5px 10px;
  outline: none;
`;

const ErrorSpan = styled.span`
  font-size: 10px;
  text-align: left;
`;

const Button = styled.button`
  width: 100px;
  padding: 3px;
  border-radius: 5px;
  align-self: center;
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be minimum 3 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, navigate));
    },
  });

  return (
    <LoginContainer>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          id="email"
          placeholder="Enter email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorSpan>{formik.errors.email}</ErrorSpan>
        ) : null}
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.email && formik.errors.password ? (
          <ErrorSpan>{formik.errors.password}</ErrorSpan>
        ) : null}
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
