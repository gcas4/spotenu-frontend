import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { useLateralMenu } from '../../hooks/useLateralMenu';
import { HomeWrapper, Content } from './style';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import HeaderAdminBand from '../../components/HeaderAdminBand';
import HeaderBand from '../../components/HeaderBand';

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
    const { role } = useParams();
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu(role);

    const decidingHeader = (role) => {
        switch (role) {
            case "admin":
                return <HeaderAdmin openLateralMenu={openLateralMenu} />
            case "band":
                return <HeaderBand openLateralMenu={openLateralMenu} />
            default:
                return <HeaderAdminBand />
        }
    }

    return (
        <HomeWrapper>
            {decidingHeader(role)}
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