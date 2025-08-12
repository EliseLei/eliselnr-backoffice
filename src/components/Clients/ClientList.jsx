import React, { Component } from "react";
import Client from "./Client";

class ClientList extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-5 gap-4 p-3 font-semibold">
          <div>Nom</div>
          <div>Prénom</div>
          <div>Prix total</div>
          <div>Nb seance photo</div>
          <div>Action</div>
        </div>

        <Client
          lastname="Elise"
          firstname="Leininger"
          price={120}
          nbShootingPhoto={3}
        />
        <Client
          lastname="Jean"
          firstname="Dupont"
          price={250}
          nbShootingPhoto={3}
        />
        <Client
          lastname="Marie"
          firstname="Durand"
          price={300}
          nbShootingPhoto={3}
        />
        <Client
          lastname="Jean"
          firstname="Dupont"
          price={250}
          nbShootingPhoto={3}
        />
        <Client
          lastname="Marie"
          firstname="Durand"
          price={300}
          nbShootingPhoto={3}
        />
        <Client
          lastname="Jean"
          firstname="Dupont"
          price={250}
          nbShootingPhoto={3}
        />
        <Client
          lastname="Marie"
          firstname="Durand"
          price={300}
          nbShootingPhoto={3}
        />
      </>
    );
  }
}

export default ClientList;
