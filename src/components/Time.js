import React, { Component } from "react";

import "../styles/Time.css";

class Time extends Component {
  constructor(props) {
    super(props);
    this.getDateTime();
    setInterval(this.getDateTime, 30000);
  }
  render() {
    return (
      <div className="time">
        <a className="time__time">{this.time}</a>
        <a className="time__time">{this.date}</a>
        <a></a>
      </div>
    );
  }
  getDateTime() {
    const d = new Date();
    this.time = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    this.date = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2);
  }
}

export default Time;
