import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import HeaderBand from '../../components/HeaderBand';
import { useLateralMenu } from '../../hooks/useLateralMenu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: #EBEFBF;
`;

const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

const Principal = styled.div`
    flex-grow: 1;
    padding: 56px;
`;

const Title = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 48px;
    margin-right: 32px;
`;

function AlbumList() {
    const history = useHistory();
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu("BAND");

    return (
        <Wrapper>
            <HeaderBand openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
                <Principal>
                    <Title>
                        <H1>Álbuns</H1>
                        <AddCircleIcon fontSize="large" />
                    </Title>
                </Principal>
            </Content>
        </Wrapper>
    );
}

export default AlbumList;