import React, { Component } from "react";

class Button extends Component {
  label;
  render() {
    return <button className="bg-primary px-4 py-2">{this.props.label}</button>;
  }
}
export default Button;
