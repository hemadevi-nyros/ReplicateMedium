import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Register from './Register';
import './Login.css';

class Login extends Component {
    constructor(props){
      super(props);
    this.state={email:",password:"};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
    
    if (event.target.name === 'email'){
      
      this.setState({ 'email': event.target.value });
        }
        if (event.target.name === 'password') {
          this.setState({'password':event.target.value});
        }  
    }
    handleSubmit(event){
      event.preventDefault();
      var userDetails={
        email:this.state.email,
        password:this.state.password
      }
      axios.post('http://localhost:3000/login',userDetails).then(res=>{
        console.log(res.userDetails);
        if (res.data.status === 'failed') {
          alert('already registerd');
        }else{
          alert('success');
        }
      })

  }
  

  render() {
    const { username, password, message } = this.state;
    return (
      <div class="container">
        <form class="form-signin">
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.handleChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.handleChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit" onSubmit={this.handleSubmit}>Login</button>
          <p>
            Not a member? <Router><Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link></Router> <Route path="/Register" component={Register}></Route>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
  