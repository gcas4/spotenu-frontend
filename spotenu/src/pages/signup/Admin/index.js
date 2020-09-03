import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { useMenu } from '../../../hooks/useMenu';
import { requestPost } from '../../../hooks/useRequest';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import styled from 'styled-components';
import { FormWrapper, InputWrapper } from '../../../style/forms';

const SingupAdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`;

const Principal = styled.div`
    width: 100%;
    background-color: pink;
    padding: 16px 40px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 700px) {
        padding: 16px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

const CenteringForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormTitle = styled.label`
    font-size: 24px;
    margin-bottom: 16px;
`;

function AdminSignup() {
    const { condicionalMenu, openMenu } = useMenu();
    const { form, onChange, resetValues } = useForm({
        name: "",
        nickname: "",
        email: "",
        password: "",
        role: "ADMIN"
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await requestPost("user/signup", form)

        if (response.message === "ok") {
            window.alert("Admin cadastrado!");
            resetValues();
        }
    }

    return (
        <SingupAdminWrapper>
            <Header openMenu={openMenu} />
            <Content>
                {condicionalMenu}
                <Principal>
                    <Nav />
                    <CenteringForm>
                        <FormWrapper onSubmit={handleSubmit}>
                            <FormTitle>Cadastro de admin</FormTitle>
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
                        </FormWrapper>
                    </CenteringForm>
                </Principal>
            </Content>
        </SingupAdminWrapper>
    );
}

export default AdminSignup;