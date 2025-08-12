import React, { Component } from "react";
import { Client } from "..";

class TopClients extends Component {
  render() {
    return (
      <>
        <h2>Top 5 des clients</h2>
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
