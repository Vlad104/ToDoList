import React, { Component } from "react";

import "../styles/Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.updateInput = this.updateInput.bind(this);
  }
  render() {
    return (
      <div className="input" value={this.state.input} onChange={this.updateInput}>
        <input className="input__text" type="text" />
        <input
          className="input__button"
          type="button"
          value="+"
          onClick={() => this.props.updateData({ text: this.state.input })}
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
}

export default Input;
