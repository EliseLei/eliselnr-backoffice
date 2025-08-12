import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ShootingPhoto, Button } from "..";

class ShootingPhotoList extends Component {
  render() {
    return (
      <>
        <NavLink to="/add-shooting-photo" className="py-4">
          <Button label="Ajouter une séance photo" />
        </NavLink>
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
