import React from 'react';
import { boutiqueData } from '@/data';
import BoutiquePersonel from '@/components/BoutiquePersonel';

const Payment = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Payment</h1>
      <p>Balance: {boutiqueData.balance} FCFA</p>
      <p>Loyer payé: {boutiqueData.isLoyerPaid ? 'Oui' : 'Non'}</p>
      <BoutiquePersonel lePersonel={boutiqueData.lePersonnel} />
    </div>
  );
};

export default Payment;

