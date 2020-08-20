import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const LoginWrapper = styled.form`
    display: grid;
    gap: 16px;
`;

function Login() {

    const history = useHistory();
    const { form, onChange } = useForm({
        nicknameOrEmail: "",
        password: ""
    })

    const handleInputChange = e => {

        const { name, value } = e.target;
        onChange(name, value);
    }

    const handleSubmit = e => {

        e.preventDefault();

        axios.post("https://2l8702f2m0.execute-api.us-east-1.amazonaws.com/dev/user/login",
            form)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                history.push("/")
            })
            .catch(err => {
                console.log(err)
                window.alert("Login falhou")
            })
    }

    return (
        <LoginWrapper onSubmit={handleSubmit}>
            <label>Login: </label>
            <input placeholder={"nickname or email"} onChange={handleInputChange} value={form.nicknameOrEmail} name={"nicknameOrEmail"} type={"text"} />
            <label>Password: </label>
            <input placeholder={"password"} onChange={handleInputChange} value={form.password} name={"password"} type={"password"} />
            <button>Entrar</button>
        </LoginWrapper>
    );
}

export default Login;