import React, { Component } from "react";

import "../styles/Task.css";

class Task extends Component {
  render() {
    return <a className="task">{this.props.text}</a>;
  }
}

export default Task;
