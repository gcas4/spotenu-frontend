import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/signup/Admin'
import Band from './pages/signup/Band'
import Listener from './pages/signup/Listener'
import Login from './pages/Login'
import BandApprove from './pages/BandApprove'

const Page404 = () => <div>Page 404 Not Found</div>

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup/admin" component={Admin} />
      <Route path="/signup/band" component={Band} />
      <Route path="/signup/listener" component={Listener} />
      <Route path="/login" component={Login} />
      <Route path="/admin/approve" component={BandApprove} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
