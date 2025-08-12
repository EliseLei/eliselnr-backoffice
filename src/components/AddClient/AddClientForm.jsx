import React, { Component } from "react";

class AddClient extends Component {
  render() {
    return (
      <>
        <form className="flex flex-col gap-4 max-w-sm">
          <input type="text" placeholder="Nom" className="border p-2 rounded" />
          <input
            type="text"
            placeholder="Prénom"
            className="border p-2 rounded"
          />
          <button type="submit" className="">
            Ajouter un client
          </button>
        </form>
      </>
    );
  }
}

export default AddClient;
