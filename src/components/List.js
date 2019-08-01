import React, { Component } from "react";

import "../styles/List.css";
import Task from './Task';
import Input from './Input';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {list: new Array()};
    this.updateData = this.updateData.bind(this);
    this.resetData = this.resetData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        localStorage.list = JSON.stringify(this.state.list);
    });
  }
  componentDidMount() {
    if (localStorage.list) {
      this.setState({list: JSON.parse(localStorage.list)});
    }
  }
  // componentWillUnmount() {
  //   localStorage.list = JSON.stringify(this.state.list);
  // }
  render() {
    return (
      <div className="list">
        <Input updateData={this.updateData} resetData={this.resetData} />
        {this.state.list.map((item, index) => (
          <Task key={index} id={index} text={item.text} deleteTask={this.deleteData} />
        ))}
      </div>
    );
  }
  deleteData(id) {
    let temp = this.state.list;
    temp.splice(id, 1);
    this.setState({list: temp});
  }

  updateData(data) {
    if (!data || !data.text) {
      return;
    }
    let temp = this.state.list;
    temp.push(data)
    this.setState({list: temp});
  }
  resetData() {
    this.setState({list: []})
  }
}

export default List;
