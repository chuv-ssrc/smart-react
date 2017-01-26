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
import LogoutButton from '../../components/Login/LogoutButton';
import LaunchButton from '../../components/Login/LaunchButton';
import { Button } from 'react-mdl';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      patients: [],
    };
  }

  componentDidMount() {
    let _this = this;
    window.FHIR.oauth2.ready(function(smart){
      _this.setState({ready: true});
    });
  }

  tryit() {
    let _this = this;
    window.FHIR.oauth2.ready(function(smart){
      let r = smart.api.search({type: 'Patient'});
      r.then((res) => {
        _this.setState({patients: res.data.entry.map(r => r.resource.name[0].family)})
      });
    });
  }

  render() {
    let patients = this.state.patients.map((p,i) => <li key={i}>{p}</li>);
    return (
      <Layout className={s.content}>
        <LogoutButton auth={this.props.auth}/>
        <h1>HOME PAGE (FHIR ready: {this.state.ready ? 1 : 0})</h1>
        <LaunchButton/>
        <Button onClick={this.tryit.bind(this)}>Try it</Button>
        <ul>
          {patients}
        </ul>
      </Layout>
    );
  }

}

export default HomePage;
