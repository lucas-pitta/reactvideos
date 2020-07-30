import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </BrowserRouter>
  </CookiesProvider>,
    document.getElementById('root')
);

