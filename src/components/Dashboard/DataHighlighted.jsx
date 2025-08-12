import React, { Component } from "react";

class DataHighlighted extends Component {
  render() {
    return (
      <div className="flex text-center items-center flex-col justify-center bg-secondary p-10">
        <p className="font-bold">{this.props.number}</p>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default DataHighlighted;
