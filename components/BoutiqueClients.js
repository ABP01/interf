import React from 'react';

const BoutiqueClients = ({ lesClients }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Clients</h2>
      <ul>
        {lesClients.map((client, index) => (
          <li key={index}>{client}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoutiqueClients;