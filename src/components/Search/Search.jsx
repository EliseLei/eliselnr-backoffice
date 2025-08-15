import React, { Component } from "react";
import { MagnifyingGlass } from "../Icons";

class Search extends Component {
  render() {
    return (
      <div className="relative w-80">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-lg shadow-sm transition"
          placeholder="Rechercher un client"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <MagnifyingGlass />
        </span>
      </div>
    );
  }
}

export default Search;
