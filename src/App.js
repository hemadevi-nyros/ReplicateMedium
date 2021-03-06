import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { Row, Col,Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
    	 <nav class="navbar navbar-default navbar-expand-lg navbar-fixed-top">
          <div class="container-fluid">     
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button> 
           </div> 
           <div class="container">
                 <h2>Medium</h2>
                 <Router><Link to='/Login'><button type="button" class="btn btn-success">Signin</button></Link></Router>
           </div>
           <ul class="nav navbar-nav"> 
                    <li class="nav-item active"><a href="#">HOME</a></li>
                    <li><a href="#">THE NEW NEW</a></li>
                    <li><a href="#">CULTURE</a></li>
                    <li><a href="#">TECH</a></li>
                    <li><a href="#">STARTUPS</a></li>
                    <li><a href="#">SELF</a></li>
                    <li><a href="#">POLITICS</a></li>
                    <li><a href="#">DESIGN</a></li>
                    <li><a href="#">HEALTH</a></li>
                    <li><a href="#">POPULAR</a></li>
                    <li><a href="#">COLLECTIONS</a></li>
                    <li><a href="#">MORE</a></li>
           </ul>
               <Route path="/Login" component={Login}></Route>
               <Route path="/" component={Home}></Route>
          </div>
       </nav>
     
    );
  }
}

export default App;
