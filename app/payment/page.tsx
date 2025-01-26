import React from 'react';
import boutiqueData from '@/data';
import BoutiquePersonel from '@/components/BoutiquePersonel';

const Payment = () => {
  return (
    <div>
      {/* Informations supplémentaires sur la boutique */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Informations sur la boutique</h2>

        {/* Services proposés */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Services proposés</h3>
          <ul className="list-disc pl-5">
            {boutiqueData.lesServices.map((service, index) => (
              <li key={index} className="text-gray-700">
                {service.nom} : {service.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Catégories d'articles */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Catégories d'articles</h3>
          <ul className="list-disc pl-5">
            {boutiqueData.lesCategories.map((categorie, index) => (
              <li key={index} className="text-gray-700">
                {categorie.nom} : {categorie.description}
              </li>
            ))}
          </ul>
        </div>

     

        {/* Personnel de la boutique */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Personnel</h3>
          <ul className="list-disc pl-5">
            {boutiqueData.lePersonnel.map((personnel, index) => (
              <li key={index} className="text-gray-700">
                {personnel.nom} - {personnel.role}
              </li>
            ))}
          </ul>
        </div>

        {/* Articles en vedette */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Articles en vedette</h3>
          <ul className="list-disc pl-5">
            {boutiqueData.alaune.map((article, index) => (
              <li key={index} className="text-gray-700">
                {article.nom} - {article.prix} FCFA
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
