import React, { Component } from "react";

class Button extends Component {
  render() {
    const { label, type = "button", onClick } = this.props;
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition cursor-pointer"
      >
        {label}
      </button>
    );
  }
}

export default Button;
