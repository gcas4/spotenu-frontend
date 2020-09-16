import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useLateralMenu } from '../../hooks/useLateralMenu';
import { useRequestPost } from '../../hooks/useRequestPost';
import HeaderAdmin from '../../components/HeaderAdmin';
import { FormWrapper, InputWrapper } from '../../style/forms';
import { GenreRegisterWrapper, Principal, Content, CenteringForm, FormTitle } from './style';

function GenreRegister() {
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu("ADMIN");
    const { form, onChange, resetValues } = useForm({
        name: ""
    })
    const { makeRequest } = useRequestPost();

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        await makeRequest("genre/create", form, "/admin/genre/register");
        resetValues();
    }

    return (
        <GenreRegisterWrapper>
            <HeaderAdmin openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
                <Principal>
                    <CenteringForm>
                        <FormWrapper onSubmit={handleSubmit}>
                            <FormTitle>Cadastro de gênero</FormTitle>
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
                            <button>CADASTRAR</button>
                        </FormWrapper>
                    </CenteringForm>
                </Principal>
            </Content>
        </GenreRegisterWrapper>
    );
}

export default GenreRegister;