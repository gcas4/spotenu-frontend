import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import { isMobile } from '../../utils/isMobile';

const HomeWrapper = styled.div`
    background-color: gray;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`;

const CondicionalMenu = styled.div`
    display: flex;
`;

const Principal = styled.div`
    background-color: pink;
    padding: 16px 40px;
    display: flex;
    flex-grow: 1;
`;

const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

function Home() {
    const history = useHistory();
    const [menu, setMenu] = useState(true);
    let visibleMenu

    useEffect(() => {
        localStorage.getItem("token") === null && history.push("/");
        setMenu(!isMobile());

    }, [history, setMenu])

    const openMenu = () => {
        setMenu(!menu)
    }

    if (menu) {
        visibleMenu = (<Menu />)
    } else {
        visibleMenu = <div></div>
    }

    return (
        <HomeWrapper>
            <Header openMenu={openMenu} />
            <Content>
                <CondicionalMenu>
                    {visibleMenu}
                </CondicionalMenu>
                <Principal>
                </Principal>
            </Content>
        </HomeWrapper>
    );
}

export default Home;