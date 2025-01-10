// components/BoutiqueServices.js
import React from 'react';

const BoutiqueServices = ({ lesServices }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Services offerts</h2>
      <ul>
        {lesServices.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoutiqueServices;