import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Register extends Component {

   constructor(props){
      super(props);
    this.state={username:"",password:""};
    this.handleUsernameofUser= this.handleUsernameofUser.bind(this);
    this.handlePasswordofUser=this.handlePasswordofUser.bind(this);
    }
    handleUsernameofUser(event) {
    this.setState({ UsernameofUser: event.target.value });
  }
  handlePasswordofUser(event) {
      this.setState({ PasswordofUser: event.target.value });
  }
  addToRegister = event => {
    event.preventDefault();
    this.setState({
      UsernameofUser: event.target.value,
      PasswordofUser: event.target.value,
    });
    axios.post('http://localhost:3000/register', {
        UsernameofUser: this.state.UsernameofUser,
        PasswordofUser: this.state.PasswordofUser,
      })
    .then(response => {
      console.log(response, 'Username added');
    })
    .catch(err => {
      console.log(err, 'Username not added, try again');
    });
    this.setState({
      UsernameOfUser: "",
      PasswordofUser: "",
    });
};
  


  render() {
    const { username, password } = this.state;
    return (
      <div class="container">
        <form class="form-signin">
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="UsernameofUSer" value={this.state.UsernameofUser} onChange={this.handleUsernameofUser} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="PasswordofUser" value={this.state.PasswordofUser} onChange={this.handlePasswordofUser} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit" onSubmit={this.addToCreate}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
