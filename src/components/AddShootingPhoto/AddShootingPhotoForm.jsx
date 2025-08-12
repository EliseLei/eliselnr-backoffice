import React, { Component } from "react";

class AddShootingPhotoForm extends Component {
  render() {
    return (
      <>
        <form className="flex flex-col gap-4 max-w-sm">
          <input type="text" placeholder="Type de séance photo" />
          <input type="number" placeholder="prix" />
          <label for="client">Pour :</label>
          <select id="prenom" name="prenom">
            <option value="alice">Alice</option>
            <option value="benjamin">Benjamin</option>
            <option value="charlotte">Charlotte</option>
            <option value="david">David</option>
          </select>

          <button type="submit" className="">
            Ajouter une séance photo
          </button>
        </form>
      </>
    );
  }
}

export default AddShootingPhotoForm;
