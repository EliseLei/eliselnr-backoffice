import { Component } from "react";
import { ShootingList } from "../components";

class ShootingPhoto extends Component {
  render() {
    return (
      <div className="p-10">
        <h1>Mes séances photos</h1>

        <ShootingList />
      </div>
    );
  }
}

export default ShootingPhoto;
