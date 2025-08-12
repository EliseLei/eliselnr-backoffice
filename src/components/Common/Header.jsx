import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="px-10 pt-5 w-full text-right">
        <NavLink to="/add-client" className="py-4">
          <Button label="Ajouter un client" />
        </NavLink>
      </div>
    );
  }
}
export default Header;
