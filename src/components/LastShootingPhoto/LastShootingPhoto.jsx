import React, { Component } from "react";
import { ShootingPhoto } from "..";

class LastShootingPhoto extends Component {
  render() {
    return (
      <>
        <h2>Mes dernières séances photos</h2>
        <ShootingPhoto lastname="Elise" firstname="Leininger" price={300} />
        <ShootingPhoto lastname="Jean" firstname="Dupont" price={250} />
        <ShootingPhoto lastname="Marie" firstname="Durand" price={300} />
        <ShootingPhoto lastname="Jean" firstname="Dupont" price={250} />
        <ShootingPhoto lastname="Marie" firstname="Durand" price={300} />
      </>
    );
  }
}

export default LastShootingPhoto;
