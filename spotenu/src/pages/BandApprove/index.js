import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Bands from './Bands';
import { requestGet, requestPostHeaders } from '../../hooks/useRequest';
import { Wrapper } from '../../style/forms';
import Header from '../../components/Header';
import { useMenu } from '../../hooks/useMenu';
import Nav from '../../components/Nav';

const BandApproveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`;

const Principal = styled.div`
    width: 100%;
    background-color: pink;
    padding: 16px 40px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 700px) {
        padding: 16px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

const FormTitle = styled.label`
    font-size: 24px;
    margin-bottom: 16px;
`;

function BandApprove() {
    const { condicionalMenu, openMenu } = useMenu();
    const [bands, setBands] = useState([]);
    let noBandsToApproveMessage;

    useEffect(() => {
        getBands();
    }, [setBands])

    const getBands = async () => {
        //TODO: erro jwt expired aqui, como verificar isso
        const bands = await requestGet("user/bands");

        if (bands.length !== 0) {
            const bandsToApprove = bands.res
                .filter(b => b.isApproved === false)
                .map(b => {
                    const bands = { ...b, isChecked: false }
                    return bands;
                });

            setBands(bandsToApprove);
        }
    }

    const handleInputChange = e => {
        const bandsChecked = bands.map(b => {
            if (e.target.value === b.name) {
                b.isChecked = !b.isChecked;
            }
            return b;
        })

        setBands(bandsChecked);
    }

    const approveBands = async () => {
        let result
        let bandsToApprove

        if (bands.length !== 0) {
            bandsToApprove = bands.filter(b => b.isChecked)
        }

        if (bandsToApprove) {
            for (let b of bandsToApprove) {
                result = await requestPostHeaders("user/approve", { "nickname": b.nickname })
            }

            if (result.res === "Band approved!") {
                window.alert("Banda(s) aprovada(s)!")
            }
            getBands()
        }
    }

    if (bands.length === 0) {
        noBandsToApproveMessage = (<label>Nenhuma banda para aprovar</label>)
    }

    return (
        <BandApproveWrapper>
            <Header openMenu={openMenu} />
            <Content>
                {condicionalMenu}
                <Principal>
                    <Nav />
                    <Wrapper>
                        <FormTitle>Bandas para aprovar</FormTitle>
                        <Bands
                            bands={bands}
                            setBands={setBands}
                            handleInputChange={handleInputChange}
                        />
                        {noBandsToApproveMessage}
                        <button onClick={approveBands}>APROVAR</button>
                    </Wrapper>
                </Principal>
            </Content>
        </BandApproveWrapper>
    );
}

export default BandApprove;