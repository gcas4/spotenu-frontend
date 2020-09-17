import styled from 'styled-components';

export const FormWrapper = styled.form`
    width: 100%;
    max-width: 350px;
    display: grid;
    gap: 16px;
    padding: 56px;
    margin: 16px;
    border: 1px solid;

    @media screen and (max-width: 700px) {
        border: none;
        padding: 16px;
        margin: 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 350px;
    display: grid;
    gap: 16px;
    padding: 56px;
    margin: 16px;
    border: 1px solid;

    @media screen and (max-width: 700px) {
        border: none;
        padding: 16px;
        margin: 0;
    }
`;

export const ChangeWrapper = styled.div`
    margin: auto;
`;

export const InputWrapper = styled.div`
    display: grid;
    gap: 4px;
`;

export const H1 = styled.h1`
    font-size: 48px;
    margin:  auto auto 32px;
`;

export const Button = styled.button`
    width: auto;
    height: auto;
    color: black;
    background: transparent;
`;