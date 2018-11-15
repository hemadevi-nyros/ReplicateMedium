import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';  
import Register from './components/Register';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
<div><Route path="/Login" component={Login}/><Route exact path="/" component={App}/><Route exact path="/Register" component={Register}/></div>
</Router>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
