import React from 'react';
import styled from 'styled-components';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MusicNote from '@material-ui/icons/MusicNote';
import PersonAdd from '@material-ui/icons/PersonAdd';
import { useHistory } from 'react-router-dom';

const HomeWrapper = styled.div`
    padding-top: 32px;
    padding: 16px;
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.label`
    font-size: 40px;
`;

function Home() {
    const history = useHistory();

    const onLogout = () => {
        localStorage.clear();
        history.push("/")
    }

    return (
        <HomeWrapper>
            <Header>
                <MusicNote onClick={() => history.push("/admin/approve")} />
                <PersonAdd onClick={() => history.push("/signup/admin")} />
                <ExitToApp onClick={onLogout} />
            </Header>
            <H1>Home</H1>
        </HomeWrapper>
    );
}

export default Home;