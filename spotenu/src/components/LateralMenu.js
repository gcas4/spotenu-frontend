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

function LateralMenu() {
    const history = useHistory();

    return (
        <LateralMenuWrapper>
            <ButtonsWrapper>
                <Button onClick={() => history.push("/admin/approve")}>APROVAR BANDAS</Button>
                <Button onClick={() => history.push("/signup/admin")}>CADASTRAR ADMIN</Button>
            </ButtonsWrapper>
        </LateralMenuWrapper>
    );
}

export default LateralMenu;