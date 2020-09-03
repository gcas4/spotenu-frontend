import React, { useState } from 'react';
import styled from 'styled-components';

const SelectAllButton = styled.button`
    color: black;
    background-color: transparent;
    margin-right: auto;
`;

const EachBand = styled.div`
    display: flex;
    align-items: center;
`;

const BandsForm = styled.div`
    display: grid;
    gap: 8px;
`;

const BandName = styled.label`
    padding-left: 8px;
`;

function Bands({ bands, setBands, handleInputChange }) {
    const [checkAll, setCheckAll] = useState(true);

    const selectAll = () => {
        const bandsChecked = bands.map(b => {
            b.isChecked = checkAll;
            return b;
        })

        setBands(bandsChecked);
        setCheckAll(!checkAll);
    }

    return (
        <BandsForm>
            <SelectAllButton onClick={selectAll}>SELECIONAR TODAS</SelectAllButton>
            {bands && bands.map(b => {
                return (
                    <EachBand key={b.name}>
                        <input
                            onChange={handleInputChange}
                            type="checkbox"
                            id={b.name}
                            name={b.name}
                            value={b.name}
                            checked={b.isChecked}
                        />
                        <BandName htmlFor={b.name}>{b.name}</BandName>
                    </EachBand>
                )
            })}
        </BandsForm>
    );
}

export default Bands;