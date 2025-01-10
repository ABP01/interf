
import React from 'react';
import { boutiqueData } from '@/data';

const Transactions = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <p>Nombre de consultations: {boutiqueData.nbrConsultes}</p>
      <p>Likes: {boutiqueData.likes}</p>
    </div>
  );
};

export default Transactions;

