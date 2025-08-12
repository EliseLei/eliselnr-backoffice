import { Component } from "react";
import { ShootingPhotoList } from "../components";

class ShootingPhoto extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Mes séances photos</h1>

        <ShootingPhotoList />
      </div>
    );
  }
}

export default ShootingPhoto;
