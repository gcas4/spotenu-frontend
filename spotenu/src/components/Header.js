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
    background: black;
    color: white;
    padding: 0 16px;
    box-sizing: border-box;
`;

const MenuIconStyled = styled.div`
    display: none;

    @media screen and (max-width: 700px){
        display: inline;
    } 
`;

const H1 = styled.label`
    font-size: 24px;
`;

function Header({ openMenu }) {
    const history = useHistory();

    const onLogout = () => {
        localStorage.clear();
        history.push("/")
    }

    return (
        <HeaderWrapper>
            <MenuIconStyled>
                <MenuIcon onClick={openMenu} />
            </MenuIconStyled>
            <H1>Spotenu</H1>
            <label onClick={onLogout}>LOGOUT</label>
        </HeaderWrapper>
    );
}

export default Header;