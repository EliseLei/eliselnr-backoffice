import { Component } from "react";
import AddClientForm from "../components/AddClient/AddClientForm";

class AddClient extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Ajouter un client</h1>

        <AddClientForm />
      </div>
    );
  }
}

export default AddClient;
