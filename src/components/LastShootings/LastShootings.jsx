import React, { Component } from "react";
import { Shooting } from "..";
import { ShootingType } from "../../enums";

class LastShootings extends Component {
  render() {
    const shootings = [
      {
        lastname: "Sophie",
        firstname: "Laurent",
        price: 130,
        type: ShootingType.FORMULA_2P_10PHOTOS,
        status: "COMPLETED",
      },
      {
        lastname: "Lucas",
        firstname: "Martin",
        price: 90,
        type: ShootingType.POLA,
        status: "PHOTOS_SENT",
      },
      {
        lastname: "Emma",
        firstname: "Dubois",
        price: 110,
        type: ShootingType.FORMULA_1P_10PHOTOS,
        status: "SESSION_SCHEDULED",
      },
      {
        lastname: "Noah",
        firstname: "Petit",
        price: 70,
        type: ShootingType.FORMULA_2P_10PHOTOS,
        status: "SELECTION_TO_SEND",
      },
      {
        lastname: "Elise",
        firstname: "Dupuis",
        price: 120,
        type: ShootingType.POLA,
        status: "WAITING_SECOND_PAYMENT",
      },
    ];

    return (
      <>
        <h2>Mes dernières séances photos</h2>
        <div className="grid grid-cols-5 gap-4 p-3 font-semibold">
          <div>Status</div>
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

export default LastShootings;
