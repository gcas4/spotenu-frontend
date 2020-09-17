import React, { useState } from 'react';
import { SelectAllButton, EachBand, BandsForm, BandName } from './style';

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