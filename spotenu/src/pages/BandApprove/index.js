import React, { useEffect } from 'react';
import Bands from './Bands';
import HeaderAdmin from '../../components/HeaderAdmin';
import { useRequestData } from '../../hooks/useRequestData';
import { useRequestPost } from '../../hooks/useRequestPost';
import { Wrapper } from '../../style/forms';
import { useLateralMenu } from '../../hooks/useLateralMenu';
import { BandApproveWrapper, Principal, Content, FormTitle } from './style';

function BandApprove() {
    const { conditionalLateralMenu, openLateralMenu } = useLateralMenu("ADMIN");
    const { data, setData, getData } = useRequestData("user/bands", [])
    let noBandsToApproveMessage;
    const { makeRequest } = useRequestPost();

    useEffect(() => {
        if (data.bands) {
            const bandsToApprove = data.bands
                .filter(b => b.isApproved === false)
                .map(b => {
                    const bands = { ...b, isChecked: false }
                    return bands;
                });

            setData(bandsToApprove);
        }
    }, [data, setData])

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
        let bandsToApprove = [];

        bandsToApprove = data.filter(b => b.isChecked);

        if (bandsToApprove.length !== 0) {
            for (let b of bandsToApprove) {
                await makeRequest("user/approve", { "nickname": b.nickname }, "/admin/approve")
            }
            getData();
        }
    }

    if ((!data) || data.length === 0) {
        noBandsToApproveMessage = (<label>Nenhuma banda para aprovar</label>)
    }

    return (
        <BandApproveWrapper>
            <HeaderAdmin openLateralMenu={openLateralMenu} />
            <Content>
                {conditionalLateralMenu}
                <Principal>
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