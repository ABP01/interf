import React from 'react';

const BoutiqueCategories = ({ lesCategories }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Catégories</h2>
      <ul>
        {lesCategories.map((categorie, index) => (
          <li key={index}>{categorie}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoutiqueCategories;