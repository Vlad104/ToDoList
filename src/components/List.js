import React, { Component } from "react";

import "../styles/List.css";
import Task from './Task';
import Input from './Input';

const MOCK = [
  {text: 'Задача 1'},
  {text: 'Задача 2'},
  {text: 'Задача 3'},
  {text: 'Задача 4'},
  {text: 'Задача 5'},
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {list: new Array()};
    this.updateData = this.updateData.bind(this);
    this.resetData = this.resetData.bind(this);
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
          <Task key={index} text={item.text} />
        ))}
      </div>
    );
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
