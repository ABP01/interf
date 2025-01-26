import React from "react";
import boutiqueData from "@/data";
import BoutiqueInfo from "@/components/BoutiqueInfo";
import BoutiqueServices from "@/components/BoutiqueServices";

const Articles = () => {
  return (
    <>

      <div className="mt-8 p-4">
        <h2 className="text-xl font-bold mb-4">Articles disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boutiqueData.lesArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={article.image}
                alt={article.nom}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.nom}</h3>
                <p className="text-gray-600">{article.description}</p>

                <p className="text-sm text-gray-500">
                  Catégorie: {article.categorie}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;