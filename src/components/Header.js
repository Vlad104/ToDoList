import React, { Component } from "react";

import "../styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    // this.state({name:})
  }
  render() {
    return <h1 className="header">Hello {this.props.name}</h1>;
  }
}

export default Header;
