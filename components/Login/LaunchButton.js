import React from 'react';
import Button from 'react-mdl/lib/Button';
import store from '../../src/store';
import { Link } from 'react-router';
import AuthService from '../../services/AuthService';


export default class LaunchButton extends React.Component {

  render() {
    return (
      <Link to='/launch'>Launch</Link>
    );
  }
}
