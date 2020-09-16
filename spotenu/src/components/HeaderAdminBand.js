import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

const Button = styled.button`
    color: white;
    background: transparent;
`;

const TitleApp = styled.label`
    font-size: 24px;
    position: sticky;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
`;

function HeaderAdminBand() {
    const history = useHistory();

    const onLogout = () => {
        localStorage.clear();
        history.push("/")
    }

    return (
        <HeaderWrapper>
            <TitleApp>Spotenu</TitleApp>
            <Button onClick={onLogout}>LOGOUT</Button>
        </HeaderWrapper>
    );
}

export default HeaderAdminBand;