import React, { Component } from "react";

import "../styles/Time.css";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {time: '', date: ''};
    this.getDateTime = this.getDateTime.bind(this);
  }
  componentDidMount() {
    this.getDateTime();
    setInterval(this.getDateTime, 30000);
  }
  render() {
    return (
      <div className="time">
        <a className="time__time">{this.state.time}</a>
        <a className="time__time">{this.state.date}</a>
      </div>
    );
  }
  getDateTime() {
    const d = new Date();
    const time = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    const date = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2);
    this.setState({time, date});
  }
}

export default Time;
