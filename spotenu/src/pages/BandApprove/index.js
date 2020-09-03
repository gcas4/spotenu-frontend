import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Bands from './Bands';
import { requestPost, baseUrl } from '../../hooks/useRequest';
import { Wrapper } from '../../style/forms';
import Header from '../../components/Header';
import { useMenu } from '../../hooks/useMenu';
import Nav from '../../components/Nav';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
    const history = useHistory();
    const { condicionalMenu, openMenu } = useMenu();
    const [bands, setBands] = useState([]);
    let noBandsToApproveMessage;

    useEffect(() => {
        getBands();
    }, [setBands])

    const getBands = async () => {
        try {
            const result = await axios.get(`${baseUrl}user/bands`, {
                headers: { "Authorization": localStorage.getItem("token") }
            })

            const bandsToApprove = result.data.bands
                .filter(b => b.isApproved === false)
                .map(b => {
                    const bands = { ...b, isChecked: false }
                    return bands;
                });

            setBands(bandsToApprove);

        } catch (e) {
            console.log("e: ", e)
            if (e.response.data.error === "jwt expired" || e.response.data.error === "jwt malformed") {
                localStorage.clear();
                history.push("/");
            }
            window.alert(e.response.data.error) || window.alert(e)
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
                result = await requestPost("user/approve", { "nickname": b.nickname })
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