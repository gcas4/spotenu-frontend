import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { requestPost } from '../../hooks/useRequest';
import { FormWrapper, ChangeWrapper, InputWrapper, H1, Button } from '../../style/forms';

function Login() {
    const history = useHistory();
    const { form, onChange, resetValues } = useForm({
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

        resetValues();
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <H1>Spotenu</H1>
            <InputWrapper>
                <label>Email ou nickname:</label>
                <input
                    placeholder={"Email ou nickname"}
                    onChange={handleInputChange}
                    value={form.nicknameOrEmail}
                    name={"nicknameOrEmail"}
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
            <button>ENTRAR</button>
            <ChangeWrapper>
                <label>Não possui cadastro? </label>
                <Button onClick={() => history.push("/signup")}>CADASTRE-SE</Button>
            </ChangeWrapper>
        </FormWrapper>
    );
}

export default Login;