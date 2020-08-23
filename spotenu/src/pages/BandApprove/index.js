import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ExitToApp from '@material-ui/icons/ExitToApp';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
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
    let noBandsToApprove;

    const onLogout = () => {
        localStorage.clear();
        history.push("/");
    }

    useEffect(() => {
        getBands();
    }, [setBands])

    const getBands = async () => {
        const bands = await requestGet("user/bands");
        if (bands) {
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
    const approveBands = async () => {
        let result
        let bandsToApprove
        if (bands) {
            bandsToApprove = bands.filter(b => b.isChecked)
        }

        if (bandsToApprove) {
            for (let b of bandsToApprove) {
                result = await requestPostHeaders("user/approve", { "nickname": b.nickname })
            }
        }

        if (result.message === "ok" || result.message === "error") {
            getBands()
        }
    }

    if (bands.length === 0) {
        noBandsToApprove = (<label>Nenhuma banda para aprovar</label>)
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
            {noBandsToApprove}
            <button onClick={approveBands}>APROVAR</button>
        </BandApproveWrapper>
    );
}

export default BandApprove;