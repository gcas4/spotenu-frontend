import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SelectAllButton = styled.button`
    color: black;
    background: white;
    margin-right: auto;
    font-size: 20px;
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
        //TODO se todos checkboxs estiverem true, ao clicar em 'Selecionar todos', vão para false.
        const bandsChecked = bands.map(b => {
            b.isChecked = checkAll;
            return b;
        })

        setBands(bandsChecked);
        setCheckAll(!checkAll);
    }

    return (
        <BandsForm>
            <SelectAllButton as="label" onClick={selectAll}>Selecionar todas</SelectAllButton>
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