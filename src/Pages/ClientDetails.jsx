import { Component } from "react";
import { ClientInfo, ShootingCard } from "../components/";

class ClientDetails extends Component {
  render() {
    const shootings = [
      {
        title: "Séance photo 1",
        type: "1 séance photo pour 1 personne",
        price: 100,
        date: "10/10/2010",
        status: "En cours",
        comment: "Séance photo à Strasbourg",
      },
      {
        title: "Séance photo 2",
        type: "1 séance photo pour 1 personne",
        price: 100,
        date: "12/10/2023",
        status: "En cours",
        comment: "Séance photo à Strasbourg",
      },
    ];

    return (
      <div className="p-10">
        <h1>Info client : Pierre Dupont</h1>

        <ClientInfo
          lastname="Dupont"
          firstname="Pierre"
          email="pierre.dupont@gmail.com"
          adresse="10 rue des Acacias 66000"
          since="10/10/2010"
        />

        <div className="mt-10 text-right">
          <h2>
            Total dépensé : <b>300 €</b>
          </h2>
        </div>

        {shootings.map((shooting, index) => (
          <ShootingCard key={index} {...shooting} />
        ))}
      </div>
    );
  }
}

export default ClientDetails;
