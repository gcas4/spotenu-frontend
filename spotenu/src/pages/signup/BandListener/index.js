import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { requestPost } from '../../../hooks/useRequest';
import { FormWrapper, ChangeWrapper, InputWrapper, H1, Button } from '../../../style/forms';

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

    const roleSelectToSend = (roleSelected) => {
        switch (roleSelected) {
            case "Ouvinte pagante":
                return "PAYING";
            case "Ouvinte não pagante":
                return "NORMAL";
            case "Banda":
                return "BAND";
            default:
                return "NORMAL";
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let body = form;

        if (form.role !== "BAND") {
            body = { ...form, description: "" };
        }

        const role = roleSelectToSend(form.role);
        body = { ...form, role: role };

        const response = await requestPost("user/signup", body)

        if (response.message === "ok") {
            window.alert(`${form.role} cadastrado(a) com sucesso!`);
            history.push("/");
        }
    }

    let description

    if (form.role === "Banda") {
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
        <FormWrapper onSubmit={handleSubmit}>
            <H1>Spotenu</H1>
            <InputWrapper>
                <label>Papel:</label>
                <select name={"role"} value={form.role} onChange={handleInputChange}>
                    <option value={""}>Selecione o papel</option>
                    <option value={"Ouvinte não pagante"}>Ouvinte não pagante</option>
                    <option value={"Ouvinte pagante"}>Ouvinte pagante</option>
                    <option value={"Banda"}>Banda</option>
                </select>
            </InputWrapper>
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
            <ChangeWrapper>
                <label>Já possui cadastro? </label>
                <Button onClick={() => history.push("/")}>LOGIN</Button>
            </ChangeWrapper>
        </FormWrapper >
    );
}

export default BandListenerSignup;