import React, { Component } from "react";
import { Button } from "..";

class AddClientForm extends Component {
  render() {
    return (
      <form className="flex flex-col gap-5">
        {/* Nom + Prénom */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              placeholder="Nom"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Prénom</label>
            <input
              type="text"
              placeholder="Prénom"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="email@exemple.com"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Adresse */}
        <div>
          <label className="block text-sm font-medium mb-1">Adresse</label>
          <input
            type="text"
            placeholder="Rue et numéro"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Code postal + Ville */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Code postal
            </label>
            <input
              type="text"
              placeholder="75000"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Ville</label>
            <input
              type="text"
              placeholder="Paris"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        </div>

        <Button type="submit" label="Ajouter un client" />
      </form>
    );
  }
}

export default AddClientForm;
