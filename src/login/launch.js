import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import FhirService from '../../services/FhirService';


class LoginPage extends React.Component {
  constructor() {
    super();
    console.debug(window.FHIR)
  }

  componentDidMount() {
    FhirService.authorize()
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>LAUNCH</h1>

        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default LoginPage;
