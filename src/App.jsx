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
`;

const App = () => (
  <AppDiv>
    <Router>
      <Route path="/" exact component={LoginScreen} />
    </Router>
  </AppDiv>
);

export default App;
