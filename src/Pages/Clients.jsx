import { Component } from "react";
import { ClientsList } from "../components";

class Clients extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Mes clients</h1>

        <ClientsList />
      </div>
    );
  }
}

export default Clients;
