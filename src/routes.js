import React from 'react'
import AuthService from '../services/AuthService'
import Home from './home/index.js';
import About from './about/index.js';
import Error from './error/index.js';
import Login from './login/index.js';
import Launch from './login/launch.js';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import store from './store';

const auth = new AuthService('3J53AFEKn0KW6j9F5SzVBhm6VniQDIr0', 'jdelafon.eu.auth0.com');
import FHIR from 'fhirclient';


class App extends React.Component {

  componentDidMount() {
    window.FHIR.oauth2.ready(function(smart){
      console.debug("FHIR AUTH READY!!!", smart);
      store.dispatch({type: "INIT_FHIR", fhir: smart});
    });
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }
    return <div>{children}</div>;
  }
}

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="login" component={Login} />
      <Route path="launch" component={Launch} onEnter={requireAuth} />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="about" component={About} onEnter={requireAuth} />
    </Route>
  </Router>
);


export default routes;
