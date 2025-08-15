import React, { Component } from "react";
import { Statistique } from "..";
import { Camera, Users, Gift, CurrencyEuro } from "../Icons";

class Dashboard extends Component {
  render() {
    return (
      <div className="grid grid-cols-4 gap-6 py-6">
        <Statistique
          icon={<CurrencyEuro />}
          number="5600"
          title="euro gagné"
          percent="20"
        />
        <Statistique
          icon={<Camera />}
          number="100"
          title="nb séance photo"
          percent="10"
        />
        <Statistique
          icon={<Users />}
          number="40"
          title="nb clients"
          percent="10"
        />
        <Statistique
          icon={<Gift />}
          number="10"
          title="nb carte cadeau"
          percent="10"
        />
      </div>
    );
  }
}

export default Dashboard;
