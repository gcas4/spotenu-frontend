import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { KeyboardBackspace, ExitToApp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Bands from './Bands';
import { requestGet, requestPostHeaders } from '../../hooks/useRequest';

const BandApproveWrapper = styled.div`
    padding-top: 32px;
    display: grid;
    gap: 32px;
    padding: 16px;
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.label`
    font-size: 32px;
`;

function BandApprove() {
    const history = useHistory();
    const [bands, setBands] = useState([]);
    let noBandsToApproveMessage;

    const onLogout = () => {
        localStorage.clear();
        history.push("/");
    }

    useEffect(() => {
        localStorage.getItem("token") === null && history.push("/");
        getBands();
    }, [setBands, history])

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
    //TODO: fazer carregamento das páginas, esperando resposta das requisições
    // colocar styled-components em outro arquivo
    // o que fazer quando jwt expired
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
            <Header>
                <KeyboardBackspace onClick={() => history.push("/home")} />
                <ExitToApp onClick={onLogout} />
            </Header>
            <H1>Bandas para aprovar</H1>
            <Bands
                bands={bands}
                setBands={setBands}
                handleInputChange={handleInputChange}
            />
            {noBandsToApproveMessage}
            <button onClick={approveBands}>APROVAR</button>
        </BandApproveWrapper>
    );
}

export default BandApprove;