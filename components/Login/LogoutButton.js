import React from 'react';
import Button from 'react-mdl/lib/Button';
import store from '../../src/store';
import { Link } from 'react-router';
import AuthService from '../../services/AuthService';


export default class LoginButton extends React.Component {

  constructor() {
    super();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    return (
      <Link onClick={this.logout.bind(this)} to='/login'>Logout</Link>
    );
  }
}
