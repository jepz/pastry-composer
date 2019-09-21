import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';

const AppDiv = styled.div`
text-align: center;
margin:auto 0;
`;

function App() {
  return (
    <AppDiv>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppDiv>
  );
}

export default App;
