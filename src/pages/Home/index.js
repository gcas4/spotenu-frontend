import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { useLateralMenu } from '../../hooks/useLateralMenu';
import { HomeWrapper, Content } from './style';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid;
    flex: 1 0 21%;
    margin: 8px;
`;

const Principal = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    background-color: pink;
    padding: 16px 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: start;
`;

function Home() {
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu("ADMIN");

    return (
        <HomeWrapper>
            <HeaderAdmin openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
                <Principal>
                    <Card>Card 1</Card>
                    <Card>Card 2</Card>
                    <Card>Card 3</Card>
                    <Card>Card 4</Card>
                    <Card>Card 5</Card>
                    <Card>Card 6</Card>
                    <Card>Card 7</Card>
                    <Card>Card 8</Card>
                </Principal>
            </Content>
        </HomeWrapper>
    );
}

export default Home;