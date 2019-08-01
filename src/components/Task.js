import React, { Component } from "react";

import "../styles/Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }
  render() {
    return (
      <div className="task">
        {/* <div className="task__check"></div> */}
        <a className="task__text"  onClick={this.deleteTask}>{this.props.text}</a>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="task__delete" onClick={this.deleteTask}>
          <path fillRule="evenodd" d="M12.437 6a.463.463 0 0 1 .464.489l-.367 6.679c0 1.104-.914 1.84-2.018 1.84H5.548c-1.103 0-2.017-.686-2.017-1.79l-.436-6.724A.462.462 0 0 1 3.558 6h8.879zM2.128 5a.529.529 0 0 1-.531-.525l.001-.012c0-.414.251-.769.608-.922.455-.241 1.681-.439 3.292-.542V1.41C5.498.632 6.13 0 6.908 0h2.184c.778 0 1.41.632 1.41 1.41v1.589c1.611.103 2.837.301 3.292.542.357.153.608.508.608.922 0 .297-.24.537-.537.537H2.128zm6.571-3.407H7.301A.301.301 0 0 0 7 1.894v1.041a46.454 46.454 0 0 1 2 0V1.894a.301.301 0 0 0-.301-.301z"/>
        </svg> */}
      </div>
    );
  }
  deleteTask() {
    this.props.deleteTask(this.props.id);
  }
}

export default Task;
