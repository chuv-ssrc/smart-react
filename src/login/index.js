/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import store from '../../src/store';
import LoginButton from '../../components/Login/LoginButton';


class LoginPage extends React.Component {
  render() {
    return (
      <Layout className={s.content}>
        <h2>Please log in</h2>
        <LoginButton auth={this.props.auth}/>
      </Layout>
    );
  }

}

export default LoginPage;
