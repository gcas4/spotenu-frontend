import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { requestPost } from '../../hooks/useRequest';

const LoginWrapper = styled.form`
    display: grid;
    gap: 16px;
`;

const InputWrapper = styled.div`
    display: grid;
    gap: 8px;
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

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await requestPost("user/login", form);

        if (response.message === "ok") {
            history.push("/home");
        }
    }

    return (
        <LoginWrapper onSubmit={handleSubmit}>
            <InputWrapper>
                <label>Login: </label>
                <input
                    placeholder={"nickname ou email"}
                    onChange={handleInputChange}
                    value={form.nicknameOrEmail}
                    name={"nicknameOrEmail"}
                    type={"text"}
                />
            </InputWrapper>
            <InputWrapper>
                <label>Senha:</label>
                <input
                    placeholder={"senha"}
                    onChange={handleInputChange}
                    value={form.password}
                    name={"password"}
                    type={"password"}
                />
            </InputWrapper>
            <button>ENTRAR</button>
            <label>Não possui cadastro...</label>
            <button onClick={() => history.push("/signup")}>CADASTRAR-SE</button>
        </LoginWrapper>
    );
}

export default Login;