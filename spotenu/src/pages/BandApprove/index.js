import React, { useEffect } from 'react';
import Bands from './Bands';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { useRequestData, requestPost } from '../../hooks/useRequestData';
import { Wrapper } from '../../style/forms';
import { useLateralMenu } from '../../hooks/useLateralMenu';
import { BandApproveWrapper, Principal, Content, FormTitle } from './style';

function BandApprove() {
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu();
    const { data, setData, getData } = useRequestData("user/bands", [])
    let noBandsToApproveMessage;

    useEffect(() => {
        addIsCheckedToBands();
    }, [data, setData])

    const addIsCheckedToBands = async () => {

        if (data.bands) {
            const bandsToApprove = data.bands
                .filter(b => b.isApproved === false)
                .map(b => {
                    const bands = { ...b, isChecked: false }
                    return bands;
                });

            setData(bandsToApprove);
        }
    }

    const handleInputChange = e => {
        const bandsChecked = data.map(b => {
            if (e.target.value === b.name) {
                b.isChecked = !b.isChecked;
            }
            return b;
        })

        setData(bandsChecked);
    }

    const approveBands = async () => {
        let result;
        let bandsToApprove = [];

        bandsToApprove = data.filter(b => b.isChecked);

        if (bandsToApprove.length !== 0) {
            for (let b of bandsToApprove) {
                result = await requestPost("user/approve", { "nickname": b.nickname })
            }

            if (result.res === "Band approved!") {
                window.alert("Banda(s) aprovada(s)!");
            }
            getData();
        }
    }

    if ((!data) || data.length == 0) {
        noBandsToApproveMessage = (<label>Nenhuma banda para aprovar</label>)
    }

    return (
        <BandApproveWrapper>
            <Header openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
                <Principal>
                    <Nav />
                    <Wrapper>
                        <FormTitle>Bandas para aprovar</FormTitle>
                        {!data.bands &&
                            <Bands
                                bands={data}
                                setBands={setData}
                                handleInputChange={handleInputChange}
                            />}
                        {noBandsToApproveMessage}
                        <button onClick={approveBands}>APROVAR</button>
                    </Wrapper>
                </Principal>
            </Content>
        </BandApproveWrapper>
    );
}

export default BandApprove;