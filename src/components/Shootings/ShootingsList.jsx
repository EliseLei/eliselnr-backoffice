import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ShootingSummary, Button } from "..";
import { ShootingType, PhotoStatus } from "../../enums";

class ShootingsList extends Component {
  render() {
    return (
      <>
        <NavLink to="/add-shooting-photo" className="py-4">
          <Button label="Ajouter une séance photo" />
        </NavLink>
        <div className="grid grid-cols-6 gap-4 p-3 font-semibold">
          <div>Nom</div>
          <div>Prénom</div>
          <div>Prix total</div>
          <div>Type Shooting</div>
          <div>Statut</div>
          <div>Action</div>
        </div>

        <ShootingSummary
          lastname="Elise"
          firstname="Leininger"
          price={80}
          type={ShootingType.FORMULA_1P_10PHOTOS}
          status={PhotoStatus.DEPOSIT_PAID}
        />
        <ShootingSummary
          lastname="Jean"
          firstname="Dupont"
          price={120}
          type={ShootingType.FORMULA_2P_10PHOTOS}
          status={PhotoStatus.SESSION_SCHEDULED}
        />
        <ShootingSummary
          lastname="Marie"
          firstname="Durand"
          price={50}
          type={ShootingType.POLA}
          status={PhotoStatus.PHOTOS_TO_EDIT}
        />
      </>
    );
  }
}

export default ShootingsList;
