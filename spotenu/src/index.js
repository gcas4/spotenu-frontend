import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/signup/Admin'
import BandListener from './pages/signup/BandListener'
import Login from './pages/Login'
import BandApprove from './pages/BandApprove'
import AdminHome from './pages/AdminHome';
import GenreRegister from './pages/GenreRegister';
import BandHome from './pages/BandHome.js';
import AlbumList from './pages/AlbumsList';

const IndexWrapper = styled.div`
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Page404 = () => <div>Page 404 Not Found</div>

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
})

ReactDOM.render(
  <IndexWrapper>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup/admin" component={Admin} exact />
        <Route path="/signup" component={BandListener} exact />
        <Route path="/admin/home" component={AdminHome} exact />
        <Route path="/admin/genre/register" component={GenreRegister} exact />
        <Route path="/admin/approve" component={BandApprove} exact />
        <Route path="/band/home" component={BandHome} exact />
        <Route path="/albums" component={AlbumList} exact />
        <Route path="/home" component={Home} exact />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </IndexWrapper>,
  document.getElementById('root')
);
