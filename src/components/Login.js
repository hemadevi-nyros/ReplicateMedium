import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Register from './Register';
import Profile from './Profile';
import './Login.css';

export default class Login extends Component {
    constructor(props){
      super(props);
    this.state={username:'',password:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
    
    if (event.target.name === 'username'){
      
      this.setState({ 'username': event.target.value });
        }
        if (event.target.name === 'password') {
          this.setState({'password':event.target.value});
        }  
    }
    handleSubmit(event){
      event.preventDefault();
      var userDetails={
        username:this.state.username,
        password:this.state.password
      }
      axios.post('http://10.90.90.61:3002/Login',userDetails).then(res=>{
       
        if (res.data.status === 'success') {
        console.log(res.data)
          this.props.history.push('/Profile')
        }
        else{
          alert("notfound");
        }
      })

  }
  

  render() {
    return (
      <div class="container">
        <form class="form-signin" method="post" onSubmit={this.handleSubmit}>
         
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" onChange={this.handleChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password"  onChange={this.handleChange} required/>
          <input class="btn btn-lg btn-primary btn-block" type="submit" value="Login" />
          <p>
            Not a member? <Router><Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link></Router> <Route path="/Register" component={Register}></Route>
          </p>
        </form>
      </div>
    );
  }
}


  