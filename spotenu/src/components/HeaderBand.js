import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderWrapper = styled.header`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: right;
    background: rgba(0, 0, 0, 0.9);;
    color: white;
    padding: 0 16px;
    box-sizing: border-box;
`;

const MenuIconStyled = styled.div`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 700px){
        display: inline;
    }
`;

const Button = styled.button`
    color: white;
    background: transparent;
`;

const TitleApp = styled.button`
    font-size: 24px;
    font-weight: lighter;
    background: transparent;
    font-family: 'Comfortaa', cursive;
    position: sticky;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
`;

function HeaderBand({ openLateralMenu }) {
    const history = useHistory();

    const onLogout = () => {
        localStorage.clear();
        history.push("/")
    }

    const goToHome = () => {
        history.push("/band/home")
    }

    return (
        <HeaderWrapper>
            <MenuIconStyled>
                <MenuIcon onClick={openLateralMenu} />
            </MenuIconStyled>
            <TitleApp onClick={goToHome}>Spotenu</TitleApp>
            <Button onClick={onLogout}>LOGOUT</Button>
        </HeaderWrapper>
    );
}

export default HeaderBand;