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

const IndexWrapper = styled.div`
  min-height: 100vh;
  /* width: 100vw; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Page404 = () => <div>Page 404 Not Found</div>

ReactDOM.render(
  <IndexWrapper>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup/admin" component={Admin} exact />
        <Route path="/signup" component={BandListener} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/admin/approve" component={BandApprove} exact />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </IndexWrapper>,
  document.getElementById('root')
);
