import React, { Component } from "react";
import { Button } from "..";
import { SourceClient } from "../../enums";

class AddClientForm extends Component {
  render() {
    return (
      <form className="flex flex-col gap-6">
        <div className="bg-secondary p-6">
          <h2>Informations clients</h2>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label>Nom</label>
              <input type="text" placeholder="Nom" />
            </div>
            <div className="w-1/2">
              <label>Prénom</label>
              <input type="text" placeholder="Prénom" />
            </div>
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="email@exemple.com" />
          </div>

          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Rue et numéro" />
          </div>

          <div>
            <label>Date de naissance</label>
            <input type="date" />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label>Code postal</label>
              <input type="text" placeholder="75000" />
            </div>
            <div className="w-1/2">
              <label>Ville</label>
              <input type="text" placeholder="Paris" />
            </div>
          </div>
        </div>

        <div className="bg-secondary p-6">
          <h2>Communication</h2>
          <div className="gap-4">
            <div>
              <label>Réseau sociaux</label>
              <input
                type="text"
                placeholder="https://www.instagram.com/eliselnr_"
              />
            </div>
            <div>
              <label>Comment ce client m'a t-il connu ?</label>
              <select>
                <option value="">-- Sélectionner --</option>
                {Object.entries(SourceClient).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>

              <label>Si autre est coché : </label>
              <input type="text" placeholder="Autre" />
            </div>
          </div>
        </div>

        <Button type="submit" label="Ajouter un client" />
      </form>
    );
  }
}

export default AddClientForm;
