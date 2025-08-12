import React, { Component } from "react";
import TopClients from "../components/TopClients/TopClients";
import Dashboard from "../components/Dashboard/Dashboard";
import LastShootingPhoto from "../components/LastShootingPhoto/LastShootingPhoto";

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
