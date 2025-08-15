import React from "react";
import { Navbar } from "..";

class Menu extends React.Component {
  render() {
    return (
      <div className="min-h-screen p-5 bg-secondary">
        <p>EliseLNR</p>
        <Navbar />
      </div>
    );
  }
}
export default Menu;
