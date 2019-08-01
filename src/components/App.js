import React, { Component } from "react";

import "../styles/App.css";
import List from './List';
import Header from './Header';
import Time from './Time';
import Settings from "./Settings";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Settings />
        <Time />
        <List />
      </div>
    );
  };
}
export default App;