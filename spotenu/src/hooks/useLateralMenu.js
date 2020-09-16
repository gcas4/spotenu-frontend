import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { isMobile } from "../utils/isMobile";
import LateralMenu from '../components/LateralMenu';

const ConditionalLateralMenu = styled.div`
    display: flex;
`;

export const useLateralMenu = ( role ) => {
    const history = useHistory();
    const [lateralMenu, setLateralMenu] = useState(true);
    let visibleLateralMenu;

    useEffect(() => {
        localStorage.getItem("token") === null && history.push("/");
        setLateralMenu(!isMobile());
    }, [history])

    const openLateralMenu = () => {
        setLateralMenu(!lateralMenu)
    }

    if (lateralMenu) {
        visibleLateralMenu = (<LateralMenu role={role} />)
    } else {
        visibleLateralMenu = <div></div>
    }

    const conditionalLateralMenu = (
        <ConditionalLateralMenu>
            {visibleLateralMenu}
        </ConditionalLateralMenu>
    )

    return { conditionalLateralMenu, openLateralMenu }
}