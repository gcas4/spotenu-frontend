import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LateralMenuWrapper = styled.div`
    width: 150px;
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 16px;

    @media(max-width: 700px) {
        position: absolute;
        left: 0;
        top: 50px;
    }
`;

const ButtonsWrapper = styled.div`
    display: grid;
    gap: 16px;
    color: white;
`;

const Button = styled.button`
    height: auto;
    text-align: left;
    background: transparent;
    cursor: pointer;
`;

function LateralMenu({ role }) {
    const history = useHistory();

    const buttons = (role) => {
        const roleUpperCase = role.toUpperCase();
        switch (roleUpperCase) {
            case "ADMIN":
                return (
                    <ButtonsWrapper>
                        <Button onClick={() => history.push("/admin/approve")}>APROVAR BANDAS</Button>
                        <Button onClick={() => history.push("/signup/admin")}>CADASTRAR ADMIN</Button>
                        <Button onClick={() => history.push("/admin/genre/register")}>CADASTRAR GÊNERO</Button>
                        <Button onClick={() => history.push("/home/admin")}>HOME</Button>
                    </ButtonsWrapper>
                );
            case "BAND":
                return (
                    <ButtonsWrapper>
                        <Button onClick={() => history.push("/albums")}>ALBUNS</Button>
                        <Button onClick={() => history.push("/home/band")}>HOME</Button>
                    </ButtonsWrapper>
                );
            default:
                return (<div></div>)
        }
    }

    return (
        <LateralMenuWrapper>
            <ButtonsWrapper>
                {buttons(role)}
            </ButtonsWrapper>
        </LateralMenuWrapper>
    );
}

export default LateralMenu;