import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import HeaderBand from '../../components/HeaderBand';
import { useLateralMenu } from '../../hooks/useLateralMenu';

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

function AlbumList() {
    const history = useHistory();
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu("BAND");

    return (
        <Wrapper>
            <HeaderBand openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
            </Content>
        </Wrapper>
    );
}

export default AlbumList;