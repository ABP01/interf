import React from 'react';

const BoutiqueArticles = ({ lesArticles }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Articles</h2>
      <ul>
        {lesArticles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoutiqueArticles;