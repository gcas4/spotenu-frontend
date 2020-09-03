import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { useMenu } from '../../hooks/useMenu';

const HomeWrapper = styled.div`
    background-color: gray;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`;

const Principal = styled.div`
    background-color: pink;
    padding: 16px 40px;
    display: flex;
    flex-grow: 1;
`;

const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

function Home() {
    const { condicionalMenu, openMenu } = useMenu();

    return (
        <HomeWrapper>
            <Header openMenu={openMenu} />
            <Content>
                {condicionalMenu}
                <Principal>
                </Principal>
            </Content>
        </HomeWrapper>
    );
}

export default Home;