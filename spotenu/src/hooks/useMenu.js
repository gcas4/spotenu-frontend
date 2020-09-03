import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { isMobile } from "../utils/isMobile";
import Menu from '../components/Menu';

const ConditionalMenu = styled.div`
    display: flex;
`;

export const useMenu = () => {
    const history = useHistory();
    const [menu, setMenu] = useState(true);
    let visibleMenu;

    useEffect(() => {
        localStorage.getItem("token") === null && history.push("/");
        setMenu(!isMobile());
    }, [history])

    const openMenu = () => {
        setMenu(!menu)
    }

    if (menu) {
        visibleMenu = (<Menu />)
    } else {
        visibleMenu = <div></div>
    }

    const condicionalMenu = (
        <ConditionalMenu>
            {visibleMenu}
        </ConditionalMenu>
    )

    return { condicionalMenu, openMenu }
}