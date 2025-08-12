import React, { Component } from "react";
import DataHighlighted from "./DataHighlighted";

class Dashboard extends Component {
  render() {
    return (
      <div className="grid grid-cols-4 gap-6 py-6">
        <DataHighlighted number="100" title="nb séance photo" />
        <DataHighlighted number="40" title="nb clients" />
        <DataHighlighted number="10" title="nb carte cadeau" />
        <DataHighlighted number="2" title="jsp" />
      </div>
    );
  }
}

export default Dashboard;
