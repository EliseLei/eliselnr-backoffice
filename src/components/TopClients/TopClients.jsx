import React, { Component } from "react";
import { Client } from "..";

class TopClients extends Component {
  render() {
    return (
      <>
        <h2>Top 5 des clients</h2>
        <div className="grid grid-cols-4 gap-4 p-3 font-semibold">
          <div>Nom complet</div>
          <div>Total</div>
          <div>Nb shooting photo</div>
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
      </>
    );
  }
}

export default TopClients;
