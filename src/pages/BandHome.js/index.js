import React from 'react';
import HeaderAdminBand from '../../components/HeaderAdminBand';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    background: #EBEFBF;
`;

const PagesWrapper = styled.div`
    width: 60%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Button = styled.button`
    width: 350px;
    height: 150px;
    margin: 16px;
    padding: 16px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: lighter;
    color: black;
    background: rgba(245, 245, 245, 0.8);
    
    @media screen and (max-width: 700px){
        width: 250px;
        height: 80px;
        font-size: 16px;
    }
`;

function BandHome() {
    const history = useHistory();

    return (
        <Wrapper>
            <HeaderAdminBand />
            <PagesWrapper>
                <Button onClick={() => history.push("/albums")}>ÁLBUNS</Button>
                <Button onClick={() => history.push("/home")}>HOME</Button>
            </PagesWrapper>
        </Wrapper>
    );
}

export default BandHome;