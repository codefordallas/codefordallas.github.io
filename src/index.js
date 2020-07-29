import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Mission from "./components/Mission";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mission />
      </div>
    );
  }
};

const HTMLRoot = document.getElementById("root");
HTMLRoot ? ReactDOM.render(<App />, HTMLRoot) : false;
