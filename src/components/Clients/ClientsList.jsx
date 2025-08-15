import React, { Component } from "react";
import { Client } from "..";
import { NavLink } from "react-router-dom";

class ClientsList extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-5 gap-4 p-3 font-semibold">
          <div>Nom complet</div>
          <div>Email</div>
          <div>Total</div>
          <div>Nb shooting photo</div>
          <div>Action</div>
        </div>

        <NavLink to="/client-detail">
          <Client
            lastname="Leininger"
            firstname="Elise"
            email="eliseleininger@gmail.com"
            price={120}
            nbShootingPhoto={3}
          />
        </NavLink>
        <NavLink to="/client-detail">
          <Client
            lastname="Dupont"
            firstname="Jean"
            email="jean.dupont@gmail.com"
            price={250}
            nbShootingPhoto={3}
          />
        </NavLink>
        <NavLink to="/client-detail">
          <Client
            lastname="Durand"
            firstname="Marie"
            email="marie.durant@gmail.com"
            price={300}
            nbShootingPhoto={3}
          />
        </NavLink>
        <NavLink to="/client-detail">
          <Client
            lastname="Dupont"
            firstname="Jean"
            email="jean.dupont@gmail.com"
            price={250}
            nbShootingPhoto={3}
          />
        </NavLink>
        <NavLink to="/client-detail">
          <Client
            lastname="Durand"
            firstname="Marie"
            email="marie.durant@gmail.com"
            price={300}
            nbShootingPhoto={3}
          />
        </NavLink>
        <NavLink to="/client-detail">
          <Client
            lastname="Dupont"
            firstname="Jean"
            email="jean.dupont@gmail.com"
            price={250}
            nbShootingPhoto={3}
          />
        </NavLink>
        <NavLink to="/client-detail">
          <Client
            lastname="Durand"
            firstname="Marie"
            email="marie.durant@gmail.com"
            price={300}
            nbShootingPhoto={3}
          />
        </NavLink>
      </>
    );
  }
}

export default ClientsList;
