import React, { Component } from "react";

class Button extends Component {
  render() {
    const { label, icon, type = "button", onClick } = this.props;
    return (
      <button
        type={type}
        onClick={onClick}
        className="justify-center items-center inline-flex bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition cursor-pointer"
      >
        {icon && <span className="pr-2">{icon}</span>}
        {label}
      </button>
    );
  }
}

export default Button;
