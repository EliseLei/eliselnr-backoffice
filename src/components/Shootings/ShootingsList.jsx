import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Shooting, Button } from "..";
import { ShootingType } from "../../enums";
import { PlusCircle } from "../Icons";

class ShootingsList extends Component {
  render() {
    const shootings = [
      {
        lastname: "Elise",
        firstname: "Leininger",
        price: 80,
        type: ShootingType.FORMULA_1P_10PHOTOS,
        status: "DEPOSIT_PAID",
      },
      {
        lastname: "Jean",
        firstname: "Dupont",
        price: 120,
        type: ShootingType.FORMULA_2P_10PHOTOS,
        status: "SESSION_TO_SCHEDULE",
      },
      {
        lastname: "Marie",
        firstname: "Durand",
        price: 50,
        type: ShootingType.POLA,
        status: "SESSION_SCHEDULED",
      },
      {
        lastname: "Paul",
        firstname: "Martin",
        price: 70,
        type: ShootingType.POLA,
        status: "SELECTION_TO_SEND",
      },
      {
        lastname: "Claire",
        firstname: "Dubois",
        price: 90,
        type: ShootingType.FORMULA_1P_10PHOTOS,
        status: "SELECTION_SENT",
      },
      {
        lastname: "Luc",
        firstname: "Moreau",
        price: 60,
        type: ShootingType.FORMULA_2P_10PHOTOS,
        status: "WAITING_SECOND_PAYMENT",
      },
      {
        lastname: "Anna",
        firstname: "Petit",
        price: 100,
        type: ShootingType.POLA,
        status: "PHOTOS_TO_EDIT",
      },
      {
        lastname: "Marc",
        firstname: "Lemoine",
        price: 110,
        type: ShootingType.FORMULA_1P_10PHOTOS,
        status: "PHOTOS_SENT",
      },
      {
        lastname: "Sophie",
        firstname: "Laurent",
        price: 130,
        type: ShootingType.FORMULA_2P_10PHOTOS,
        status: "COMPLETED",
      },
    ];

    return (
      <>
        <NavLink to="/add-shooting-photo" className="py-4">
          <Button label="Ajouter une séance photo" icon={<PlusCircle />} />
        </NavLink>

        <div className="mt-10 grid grid-cols-5 gap-4 p-3 font-semibold">
          <div>Statut</div>
          <div>Nom complet</div>
          <div>Type</div>
          <div>Prix</div>
          <div>Action</div>
        </div>

        {shootings.map((shooting, index) => (
          <Shooting
            key={index}
            lastname={shooting.lastname}
            firstname={shooting.firstname}
            price={shooting.price}
            type={shooting.type}
            status={shooting.status}
          />
        ))}
      </>
    );
  }
}

export default ShootingsList;
