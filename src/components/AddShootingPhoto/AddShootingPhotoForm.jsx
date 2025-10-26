import React, { Component } from "react";
import { ShootingType, photoPrice } from "../../enums";
import { Button } from "..";
import { PlusCircle } from "../Icons";

class AddShootingPhotoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basePrice: "",
      reduction: "",
      extraPhotos: 0,
      finalTotal: "",
      photoPrice: photoPrice,
    };
  }

  handleBasePriceChange = (e) => {
    this.setState({ basePrice: e.target.value }, this.updateTotal);
  };

  handleReductionChange = (e) => {
    this.setState({ reduction: e.target.value });
  };

  handleExtraPhotosChange = (e) => {
    this.setState({ extraPhotos: e.target.value }, this.updateTotal);
  };

  applyReduction = () => {
    const { basePrice, reduction } = this.state;
    const reducedBase = Math.max(0, Number(basePrice) - Number(reduction));
    this.setState({ basePrice: reducedBase.toFixed(2) }, this.updateTotal);
  };

  updateTotal = () => {
    const { basePrice, extraPhotos, photoPrice } = this.state;
    const total =
      Number(basePrice || 0) + Number(extraPhotos || 0) * photoPrice;
    this.setState({ finalTotal: total.toFixed(2) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", this.state);
  };

  render() {
    const { basePrice, reduction, extraPhotos, finalTotal, photoPrice } =
      this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* SECTION INFOS */}
        <div className="bg-secondary p-6">
          <h2>Informations</h2>

          {/* Client */}
          <div className="flex flex-col">
            <label for="prenom">Pour :</label>
            <select id="prenom" name="prenom">
              <option value="">-- Sélectionner --</option>
              <option value="alice">Alice</option>
              <option value="benjamin">Benjamin</option>
              <option value="charlotte">Charlotte</option>
              <option value="david">David</option>
            </select>
          </div>

          {/* Type séance */}
          <div className="flex flex-col">
            <label for="shootingphotoType">Type de séance photo :</label>
            <select id="shootingphotoType" name="shootingphotoType">
              <option value="">-- Sélectionner --</option>
              {Object.entries(ShootingType).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Carte cadeau */}
          <div className="flex flex-col">
            <label htmlFor="carte">Carte cadeau :</label>
            <select id="carte" name="carte">
              <option value="">-- Aucun --</option>
              <option value="carte1">Carte cadeau 1</option>
              <option value="carte2">Carte cadeau 2</option>
            </select>
          </div>
        </div>

        {/* SECTION TARIFICATION */}
        <div className="bg-secondary p-6 mt-6">
          <h2>Tarification</h2>

          {/* Prix base */}
          <div className="flex flex-col">
            <label>Prix de base :</label>
            <input
              type="number"
              value={basePrice}
              onChange={this.handleBasePriceChange}
            />
          </div>

          {/* Réduction */}
          <div className="flex flex-col">
            <label>Réduction :</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={reduction}
                onChange={this.handleReductionChange}
              />
              <Button
                type="button"
                onClick={this.applyReduction}
                label="Appliquer"
              />
            </div>
          </div>

          {/* Photos supplémentaires */}
          <div className="flex flex-col">
            <label>Photos supplémentaires ({photoPrice} € chacune) :</label>
            <input
              type="number"
              value={extraPhotos}
              onChange={this.handleExtraPhotosChange}
            />
          </div>

          {/* Total */}
          <div className="bg-white p-3 rounded-md shadow text-center mt-4">
            <span className="block font-medium text-lg">Total à payer :</span>
            <span className="text-2xl font-bold text-primary">
              {finalTotal ? `${finalTotal} €` : "--"}
            </span>
          </div>
        </div>

        {/* SECTION AUTRES */}
        <div className="bg-secondary p-6 mt-6">
          <h2>Autres</h2>
          <div className="flex flex-col">
            <label htmlFor="comment">Commentaire :</label>
            <textarea id="comment" placeholder="Commentaire"></textarea>
          </div>
          <Button
            type="submit"
            label="Ajouter une séance photo"
            icon={<PlusCircle />}
          />
        </div>
      </form>
    );
  }
}

export default AddShootingPhotoForm;
