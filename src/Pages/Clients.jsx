import { Component } from "react";
import ClientList from "../components/Clients/ClientList";

class Clients extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Mes clients</h1>

        <ClientList />
      </div>
    );
  }
}

export default Clients;
