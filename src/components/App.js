import React, { Component } from "react";

import "../styles/App.css";
import List from './List';
import Header from './Header';
import Time from './Time';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Time />
        <List />
      </div>
    );
  };
}

export default App;