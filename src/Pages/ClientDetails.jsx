import { Component } from "react";
import { ClientList } from "../components";

class ClientDetails extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Info client</h1>

        <div className="p-6 bg-secondary">
          <h2>Information clients</h2>
          <div className="mt-2">
            <p>Nom : </p>
            <p>Dupont</p>
          </div>
          <div className="mt-2">
            <p>Prénom : </p>
            <p>Pierre</p>
          </div>
          <div className="mt-2">
            <p>Client depuis : </p>
            <p>10/10/2010</p>
          </div>
        </div>
        <div className="mt-4 p-6 bg-secondary">
          <h2>Séance photo 1</h2>
          <div className="mt-2">
            <p>Type : </p>
            <p>1 séance photo pour 1 personne</p>
          </div>
          <div className="mt-2">
            <p>Prix : </p>
            <p>100 €</p>
          </div>
          <div className="mt-2">
            <p>Date : </p>
            <p>10/10/2010</p>
          </div>
          <div className="mt-2">
            <p>Statut : </p>
            <p>En cours</p>
          </div>
          <div className="mt-2">
            <p>Commentaire : </p>
            <p>Séance photo à strasbourg</p>
          </div>
        </div>
        <div className="mt-4 p-6 bg-secondary">
          <h2>Séance photo 1</h2>
          <div className="mt-2">
            <p>Type : </p>
            <p>1 séance photo pour 1 personne</p>
          </div>
          <div className="mt-2">
            <p>Prix : </p>
            <p>100 €</p>
          </div>
          <div className="mt-2">
            <p>Statut : </p>
            <p>En cours</p>
          </div>
          <div className="mt-2">
            <p>Commentaire : </p>
            <p>Séance photo à strasbourg</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientDetails;
