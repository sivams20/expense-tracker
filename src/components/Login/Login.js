import React from "react";
import styled from 'styled-components';

const LoginContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginForm = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Input = styled.input`
    border:none;
    border-bottom: 1px solid #1890ff;
    padding: 5px 10px;
    outline: none;
`

const Button = styled.button`
    width: 100px;
    padding: 3px;
    border-radius: 5px;
    align-self: center;
`

function Login(){

    return(
        <LoginContainer>
            <LoginForm>
                <Input type="text" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Button>Login</Button>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login;
