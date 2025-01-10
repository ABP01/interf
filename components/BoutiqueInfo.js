// components/BoutiqueInfo.js
import React from 'react';

const BoutiqueInfo = ({ proprietaire, annee, adresse, horaires, date, etoiles }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Informations de la Boutique</h2>
      <p>Propriétaire: {proprietaire}</p>
      <p>Année de création: {annee}</p>
      <p>Adresse: {adresse}</p>
      <p>Date: {date}</p>
      <p>Etoiles: {etoiles}</p>
      <div>
        <h3 className="font-bold mt-2">Horaires d'ouverture:</h3>
        {horaires.map((horaire, index) => (
          <p key={index}>{horaire.jour}: {horaire.start}h - {horaire.end}h</p>
        ))}
      </div>
    </div>
  );
};

export default BoutiqueInfo;