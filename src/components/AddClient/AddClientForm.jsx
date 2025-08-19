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
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Prénom</label>
              <input
                type="text"
                placeholder="Prénom"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="email@exemple.com"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Adresse</label>
            <input
              type="text"
              placeholder="Rue et numéro"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Code postal
              </label>
              <input
                type="text"
                placeholder="75000"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Ville</label>
              <input
                type="text"
                placeholder="Paris"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-secondary p-6">
          <h2>Communication</h2>
          <div className="gap-4">
            <div className="">
              <label className="block text-sm font-medium mb-1">
                Réseau sociaux
              </label>
              <input
                type="text"
                placeholder="https://www.instagram.com/eliselnr_"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium mb-1">
                Comment ce client m'a t-il connu ?
              </label>
              <select className="border rounded-md p-2 focus:ring-2 focus:ring-primary">
                <option value="">-- Sélectionner --</option>
                {Object.entries(SourceClient).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>

              <label>Si autre est coché : </label>
              <input
                type="text"
                placeholder="Autre"
                classNa
                me="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <Button type="submit" label="Ajouter un client" />
      </form>
    );
  }
}

export default AddClientForm;
