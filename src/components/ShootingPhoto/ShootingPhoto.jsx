import React, { Component } from "react";

class ShootingPhoto extends Component {
  render() {
    const { lastname, firstname, price } = this.props;

    return (
      <div
        className="
          grid grid-cols-4 gap-4 p-5 border-b border-gray-200
          hover:bg-secondary transition-colors duration-200 cursor-pointer
        "
      >
        <div>{lastname}</div>
        <div>{firstname}</div>
        <div>{price} €</div>
        <div className="text-red-500">Supprimer</div>
      </div>
    );
  }
}

export default ShootingPhoto;
