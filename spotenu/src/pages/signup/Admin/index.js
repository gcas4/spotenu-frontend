import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { useLateralMenu } from '../../../hooks/useLateralMenu';
import { useRequestPost } from '../../../hooks/useRequestPost';
import HeaderAdmin from '../../../components/HeaderAdmin';
import { FormWrapper, InputWrapper } from '../../../style/forms';
import { SingupAdminWrapper, Principal, Content, CenteringForm, FormTitle } from './style';

function AdminSignup() {
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu("ADMIN");
    const { form, onChange, resetValues } = useForm({
        name: "",
        nickname: "",
        email: "",
        password: "",
        role: "ADMIN"
    })
    const { makeRequest } = useRequestPost();

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        await makeRequest("user/signup", form, "/signup/admin");
        resetValues();
    }

    return (
        <SingupAdminWrapper>
            <HeaderAdmin openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
                <Principal>
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