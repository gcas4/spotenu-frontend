import styled from 'styled-components';

export const SingupAdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`;

export const Principal = styled.div`
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

export const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

export const CenteringForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormTitle = styled.label`
    font-size: 24px;
    margin-bottom: 16px;
`;