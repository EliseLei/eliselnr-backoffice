import React, { Component } from "react";
import { Status } from "..";

class ShootingSummary extends Component {
  render() {
    const { lastname, firstname, price, type, status } = this.props;

    return (
      <div
        className="
          grid grid-cols-6 gap-4 p-5 border-b border-gray-200
          hover:bg-secondary transition-colors duration-200 cursor-pointer"
      >
        <div>{lastname}</div>
        <div>{firstname}</div>
        <div>{price} €</div>
        <div>{type}</div>
        <Status status={status} />
        <div className="text-red-500">Supprimer</div>
      </div>
    );
  }
}

export default ShootingSummary;
