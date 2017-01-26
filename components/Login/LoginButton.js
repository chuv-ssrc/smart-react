import React from 'react';
import Button from 'react-mdl/lib/Button';
import store from '../../src/store';
import AuthService from '../../services/AuthService';


export default class LoginButton extends React.Component {

  constructor() {
    super();
  }

  login() {
    this.props.auth.login();
  }

  render() {
    return (
      <Button onClick={this.login.bind(this)}>Login</Button>
    );
  }

}
