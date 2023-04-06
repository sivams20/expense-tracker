import React from "react";
import styled from "styled-components";

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

const SignupForm = styled.form`
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
  return (
    <>
      <SignupContainer>
        <SignupForm>
          <input type="text" name="email" placeholder="Enter email" />
          <input type="password" name="password" placeholder="Enter password" />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
          />
          <Button type="submit">Signup</Button>
        </SignupForm>
      </SignupContainer>
    </>
  );
}

export default Signup;
