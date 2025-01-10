
import React from 'react';

const BoutiquePersonel = ({ lePersonel }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Le personel</h2>
      <ul>
        {lePersonel.map((personel, index) => (
          <li key={index}>{personel}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoutiquePersonel;