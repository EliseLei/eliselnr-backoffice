import { Component } from "react";
import { ShootingList, NumberOfElement } from "../components";

class ShootingPhoto extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="flex items-center gap-2 pb-3">
          <h1>Mes séances photos</h1>
          <NumberOfElement numberOfElement="12" />
        </div>

        <ShootingList />
      </div>
    );
  }
}

export default ShootingPhoto;
