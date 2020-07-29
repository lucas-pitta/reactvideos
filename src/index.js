import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

