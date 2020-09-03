import React from 'react';
import Header from '../../components/Header';
import { useLateralMenu } from '../../hooks/useLateralMenu';
import { HomeWrapper, Principal, Content } from './style';

function Home() {
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu();

    return (
        <HomeWrapper>
            <Header openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
                <Principal>
                </Principal>
            </Content>
        </HomeWrapper>
    );
}

export default Home;