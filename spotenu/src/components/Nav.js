import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

const NavWrapper = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

function Nav() {
    const history = useHistory();

    const goToHome = () => {
        history.push("/home")
    }

    return (
        <NavWrapper>
            <KeyboardBackspace onClick={goToHome} />
        </NavWrapper>
    );
}

export default Nav;