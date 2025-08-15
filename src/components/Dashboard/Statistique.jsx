import React, { Component } from "react";

class Statistique extends Component {
  render() {
    const { icon, number, title, percent } = this.props;

    return (
      <div className="flex flex-col items-center justify-center bg-secondary rounded-lg p-6 w-full">
        <div className="text-primary mb-3 bg-white rounded-full p-3">
          {icon}
        </div>
        <p className="text-3xl font-bold">{number}</p>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-green text-xs mt-2">▲ {percent}%</p>
      </div>
    );
  }
}

export default Statistique;
