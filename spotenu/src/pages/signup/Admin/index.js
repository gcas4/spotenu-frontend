import React from 'react';
import styled from 'styled-components';
import { useForm } from '../../../hooks/useForm';
import { requestPostHeaders } from '../../../hooks/useRequest';
import { useHistory } from 'react-router-dom';
import ExitToApp from '@material-ui/icons/ExitToApp';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

const SignupWrapper = styled.form`
    display: grid;
    gap: 32px;
    padding-top: 32px;
    padding: 16px;
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const InputWrapper = styled.div`
    display: grid;
    gap: 8px;
`;

const H1 = styled.label`
    font-size: 32px;
`;

const Form = styled.div`
    display: grid;
    gap: 16px;
`;

function AdminSignup() {
    const history = useHistory();
    const { form, onChange, resetValues } = useForm({
        name: "",
        nickname: "",
        email: "",
        password: ""
    })

    const onLogout = () => {
        localStorage.clear();
        history.push("/");
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await requestPostHeaders(`user/signup/admin`, form)

        if (response.message === "ok") {
            window.alert("Admin cadastrado!");
            resetValues();
        }
    }

    return (
        <SignupWrapper onSubmit={handleSubmit}>
            <Header>
                <KeyboardBackspace onClick={() => history.push("/home")} />
                <ExitToApp onClick={onLogout} />
            </Header>
            <H1>Cadastro de admin</H1>
            <Form>
                <InputWrapper>
                    <label>Nome:</label>
                    <input
                        placeholder={"Nome"}
                        onChange={handleInputChange}
                        value={form.name}
                        name={"name"}
                        type={"text"}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Nickname:</label>
                    <input
                        placeholder={"Nickname"}
                        onChange={handleInputChange}
                        value={form.nickname}
                        name={"nickname"}
                        type={"text"}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Email:</label>
                    <input
                        placeholder={"Email"}
                        onChange={handleInputChange}
                        value={form.email}
                        name={"email"}
                        type={"text"}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Senha:</label>
                    <input
                        placeholder={"Senha"}
                        onChange={handleInputChange}
                        value={form.password}
                        name={"password"}
                        type={"password"}
                    />
                </InputWrapper>
                <button>CADASTRAR</button>
            </Form>
        </SignupWrapper>
    );
}

export default AdminSignup;