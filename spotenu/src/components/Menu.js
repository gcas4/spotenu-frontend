import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const MenuWrapper = styled.div`
    width: 150px;
    flex-grow: 1;
    background-color: black;
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
    width: auto;
    height: auto;
    color: white;
    text-align: left;
    background: transparent;
    font-weight: lighter;
    cursor: pointer;
`;

function Menu() {
    const history = useHistory();

    return (
        <MenuWrapper>
            <ButtonsWrapper>
                <Button onClick={() => history.push("/admin/approve")}>APROVAR BANDAS</Button>
                <Button onClick={() => history.push("/signup/admin")}>CADASTRAR ADMIN</Button>
            </ButtonsWrapper>
        </MenuWrapper>
    );
}

export default Menu;