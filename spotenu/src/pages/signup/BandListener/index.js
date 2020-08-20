import React from 'react';
import styled from 'styled-components';
import { useForm } from '../../../hooks/useForm';
import { requestPost } from '../../../hooks/useRequest';
import { useHistory } from 'react-router-dom';

const SignupWrapper = styled.form`
    display: grid;
    gap: 16px;
    padding-top: 32px;
`;

const InputWrapper = styled.div`
    display: grid;
    gap: 8px;
`;

const Button = styled.button`
    color: black;
    background: white;
    border: 2px solid black;
`;

function BandListenerSignup() {
    const history = useHistory();
    const { form, onChange } = useForm({
        role: "",
        name: "",
        nickname: "",
        email: "",
        password: "",
        description: ""
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let role = form.role.toLowerCase();
        let body = form;

        if (form.role !== "BAND") {
            body = { ...form, description: "" };
            role = "listener";
        }

        const response = await requestPost(`user/signup/${role}`, body)

        if (response.message === "ok") {
            history.push("/home");
        }
    }

    let description

    if (form.role === "BAND") {
        description = (
            <InputWrapper>
                <label>Descrição:</label>
                <input
                    placeholder={"Descrição"}
                    onChange={handleInputChange}
                    value={form.description}
                    name={"description"}
                    type={"text"}
                />
            </InputWrapper>
        )
    }

    return (
        <SignupWrapper onSubmit={handleSubmit}>
            <select name={"role"} value={form.role} onChange={handleInputChange}>
                <option value={""}>Selecione o papel</option>
                <option value={"NORMAL"}>NORMAL</option>
                <option value={"PAYING"}>PAYING</option>
                <option value={"BAND"}>BAND</option>
            </select>
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
            {description}
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
            <Button onClick={() => history.push("/")}>VOLTAR</Button>
        </SignupWrapper >
    );
}

export default BandListenerSignup;