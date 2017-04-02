import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Login from './components/Login.jsx';
import Payment from './components/Payment.jsx';
import Todo from './components/Todo.jsx';
import {ipp} from './components/ipp'

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <Route path="/login" component={Login} >
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Route>
      <Route path="/todo" component={Todo} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment" component={Payment} />
    </Route >
  </Router >,
  document.getElementById('root')
);

