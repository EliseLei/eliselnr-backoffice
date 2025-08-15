import React, { Component } from "react";
import { ShootingType } from "../../enums/ShootingType";
import { Button } from "..";

class AddShootingPhotoForm extends Component {
  render() {
    return (
      <>
        <form className="flex flex-col gap-4 max-w-sm">
          <label for="client">Pour :</label>
          <select id="prenom" name="prenom">
            <option value="alice">Alice</option>
            <option value="benjamin">Benjamin</option>
            <option value="charlotte">Charlotte</option>
            <option value="david">David</option>
          </select>
          <label htmlFor="shootingphotoType">Type de séance photo :</label>
          <select id="shootingphotoType" name="shootingphotoType">
            {Object.entries(ShootingType).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <label for="price">Prix :</label>
          <input id="price" type="number" placeholder="prix" />
          <Button type="submit" label="Ajouter une séance photo" />
        </form>
      </>
    );
  }
}

export default AddShootingPhotoForm;
