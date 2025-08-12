import React, { Component } from "react";
import ShootingPhoto from "./ShootingPhoto";

class ShootingPhotoList extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-4 gap-4 p-3 font-semibold">
          <div>Nom</div>
          <div>Prénom</div>
          <div>Prix total</div>
          <div>Action</div>
        </div>

        <ShootingPhoto lastname="Elise" firstname="Leininger" price={80} />
        <ShootingPhoto lastname="Jean" firstname="Dupont" price={80} />
        <ShootingPhoto lastname="Marie" firstname="Durand" price={80} />
      </>
    );
  }
}

export default ShootingPhotoList;
