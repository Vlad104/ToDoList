import React, { Component } from "react";

import "../styles/Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {input: new String()};
    this.updateInput = this.updateInput.bind(this);
    this.addData = this.addData.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  render() {
    return (
      <div className="input">
        <input className="input__text" type="text" value={this.state.input} onChange={this.updateInput} onKeyDown={this.handleKeyDown}/>
        <input
          className="input__button"
          type="button"
          value="+"
          onClick={this.addData}
        />
        <input
          className="input__button"
          type="button"
          value="-"
          onClick={() => this.props.resetData()}
        />
      </div>
    );
  }
  updateInput(event) {
    this.setState({input: event.target.value});
  }
  addData() {
    this.props.updateData({ text: this.state.input });
    this.setState({input: ''});
  }
  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.addData();
    }
  }
}

export default Input;
