import React, { Component } from "react";
import { StatusBadge } from "..";
import { PencilSquare } from "../Icons";

class Shooting extends Component {
  render() {
    const { lastname, firstname, price, type, status } = this.props;

    return (
      <div
        className="
          grid grid-cols-5 gap-5 p-5 border-b border-gray-200
          hover:bg-secondary transition-colors duration-200 cursor-pointer"
      >
        <div>
          <StatusBadge statusKey={status} />
        </div>
        <div>
          {firstname} {lastname}
        </div>
        <div>{type}</div>
        <div>{price} €</div>
        <div>
          <PencilSquare />
        </div>
      </div>
    );
  }
}

export default Shooting;
