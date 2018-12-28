import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
const Outer = styled.div`
  text-align: center;
`;
const Header = styled.h1`
  color: red;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <Outer>
            Edit <code>src/App.js</code> and save to reload.
          </Outer>
        </Header>
      </div>
    );
  }
}

export default App;
