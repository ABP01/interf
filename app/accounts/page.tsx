
import React from 'react';
import { boutiqueData } from '@/data';
import BoutiqueInfo from '@/components/BoutiqueInfo';
import BoutiqueServices from '@/components/BoutiqueServices';

const Accounts = () => {
  return (
    <>
    
    <div className="p-4">
      <h1 className="text-2xl font-bold">Accounts</h1>
      <p>Propriétaire: {boutiqueData.proprietaire}</p>
      <p>ID Partenaire: {boutiqueData.idpartner}</p>
      <p>Adresse: {boutiqueData.adresse}</p>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
     <BoutiqueInfo
       proprietaire={boutiqueData.proprietaire}
       annee={boutiqueData.annee}
       adresse={boutiqueData.adresse}
       horaires={boutiqueData.horaires}
       date={boutiqueData.date}
       etoiles={boutiqueData.etoile}
     />
     <BoutiqueServices lesServices={boutiqueData.lesServices} />
   </div>
    </>
  );
};

export default Accounts;
