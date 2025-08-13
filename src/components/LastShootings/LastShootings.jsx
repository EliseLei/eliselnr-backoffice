import React, { Component } from "react";
import { ShootingSummary } from "..";

class LastShootings extends Component {
  render() {
    return (
      <>
        <h2>Mes dernières séances photos</h2>
        <ShootingSummary lastname="Elise" firstname="Leininger" price={300} />
        <ShootingSummary lastname="Jean" firstname="Dupont" price={250} />
        <ShootingSummary lastname="Marie" firstname="Durand" price={300} />
        <ShootingSummary lastname="Jean" firstname="Dupont" price={250} />
        <ShootingSummary lastname="Marie" firstname="Durand" price={300} />
      </>
    );
  }
}

export default LastShootings;
