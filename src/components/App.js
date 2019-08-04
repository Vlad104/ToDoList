import React, { Component } from "react";

import "../styles/App.css";
import List from './List';
import Header from './Header';
import Time from './Time';
import Settings from "./Settings";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: new String()};
    this.updateName = this.updateName.bind(this);
  }
  render() {
    return (
      <div className="app">
        <Header name={this.state.name} />
        <Settings updateName={this.updateName} />
        <Time />
        <List />
      </div>
    );
  }
  componentDidMount() {
    if (localStorage.settings) {
      const temp = JSON.parse(localStorage.settings);
      document.body.style.setProperty('--backgroundColor', temp.colorBack);
      document.body.style.setProperty('--mainColor', temp.colorText);
      this.updateName(temp.username);
    }
  }
  updateName(name) {
    this.setState({name})
  }
}
export default App;