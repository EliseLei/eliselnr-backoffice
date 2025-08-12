import React, { Component } from "react";
import { LastShootingPhoto, Dashboard, TopClients } from "../components";

class Home extends Component {
  render() {
    return (
      <>
        <div className="p-10">
          <h1>Dashboard</h1>
          <Dashboard />
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div>
              <TopClients />
            </div>
            <div>
              <LastShootingPhoto />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
