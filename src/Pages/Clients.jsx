import { Component } from "react";
import { ClientsList, NumberOfElement, Search } from "../components";

class Clients extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="flex items-center gap-2 pb-3">
          <h1>Mes clients</h1>
          <NumberOfElement numberOfElement="12" />
        </div>
        <div className="mb-4">
          <Search />
        </div>

        <ClientsList />
      </div>
    );
  }
}

export default Clients;
