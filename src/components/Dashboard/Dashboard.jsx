import React, { Component } from "react";
import { Statistique } from "..";

class Dashboard extends Component {
  render() {
    return (
      <div className="grid grid-cols-4 gap-6 py-6">
        <Statistique number="100" title="nb séance photo" />
        <Statistique number="40" title="nb clients" />
        <Statistique number="10" title="nb carte cadeau" />
        <Statistique number="2" title="jsp" />
      </div>
    );
  }
}

export default Dashboard;
