// components/BoutiqueHeader.js
import React from 'react';

const BoutiqueHeader = ({ nom, desc, cover, duree }) => {
  return (
    <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${cover})` }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">{nom}</h1>
          <p className="mt-2">{desc}</p>
          <p>Durée: {duree}</p>
        </div>
      </div>
    </div>
  );
};

export default BoutiqueHeader;