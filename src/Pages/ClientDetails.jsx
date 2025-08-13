import { Component } from "react";
import { ClientList } from "../components";

class ClientDetails extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Info client : Pierre Dupont</h1>

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
            <p className="italic">Client depuis 10/10/2010 </p>
          </div>
        </div>
        <div className="mt-10 text-right">
          <h2>
            Total : <b>300€</b>
          </h2>
        </div>
        <div className="mt-4 p-6 bg-secondary relative">
          <span className="absolute right-6 top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </span>
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
        <div className="mt-4 p-6 bg-secondary relative">
          <span className="absolute right-6 top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </span>

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
