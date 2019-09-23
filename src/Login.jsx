import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import styled from 'styled-components';
import LoginScreen from './screens/login';
import './App.css';

const AppDiv = styled.div`
  text-align: center;
  margin: auto 0;
  background-color: #fefcec;
  height: 100%;
  width: 100%;
`;

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))}
  />
);

const App = () => (
  <AppDiv>
    <Router>
      <Route path="/" exact component={LoginScreen} />
      <PrivateRoute path="/pastry" exact component={LoginScreen} />
    </Router>
  </AppDiv>
);

export default App;
