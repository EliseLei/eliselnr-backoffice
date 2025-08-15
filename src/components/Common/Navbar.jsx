import React from "react";
import { NavLink } from "react-router-dom";
import { Camera, ChartPie, Users } from "../Icons";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="mt-12">
        <ul className="flex md:flex-col">
          <NavLink to="/" className="py-4">
            <li className="flex items-center">
              <ChartPie />
              <span className="pl-2">Dashboard</span>
            </li>
          </NavLink>
          <NavLink to="/shooting-photo" className="py-4">
            <li className="flex items-center">
              <Camera />
              <span className="pl-2">Liste des séances photos</span>
            </li>
          </NavLink>
          <NavLink to="/clients" className="py-4">
            <li className="flex items-center">
              <Users />
              <span className="pl-2">Liste des clients</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
