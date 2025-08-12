import React, { Component } from "react";

class AddShootingPhotoForm extends Component {
  render() {
    return (
      <>
        <form className="flex flex-col gap-4 max-w-sm">
          <label for="shootingphotoType">Type de séance photo :</label>
          <select id="shootingphotoType" name="shootingphotoType">
            <option value="type1">Séance photo - 1 personne</option>
            <option value="type2">Séance photo - 2 personnes</option>
            <option value="type3">Pola</option>
          </select>

          <label for="price">Prix :</label>
          <input id="price" type="number" placeholder="prix" />
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
