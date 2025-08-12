import { Component } from "react";
import { AddShootingPhotoForm } from "../components";

class AddShootingPhoto extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Ajouter une séance photo</h1>

        <AddShootingPhotoForm />
      </div>
    );
  }
}

export default AddShootingPhoto;
