import React, { Component } from "react";

import "../styles/App.css";
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="app">
        <List />
      </div>
    );
  };
}

export default App;