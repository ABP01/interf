import React from 'react';
import boutiqueData from '@/data';

const Settings = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-center">Paramètres de la Boutique</h1>

      {/* Grille principale pour les sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Informations de base */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Informations de base</h2>
          <div className="space-y-2">
            <p><strong>ID:</strong> {boutiqueData.id}</p>
            <p><strong>Nom:</strong> {boutiqueData.nom}</p>
            <p><strong>Propriétaire:</strong> {boutiqueData.proprietaire}</p>
            <p><strong>Année:</strong> {boutiqueData.annee}</p>
            <p><strong>Adresse:</strong> {boutiqueData.adresse}</p>
            <p><strong>Description:</strong> {boutiqueData.desc}</p>
          </div>
        </div>

        {/* Statuts */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Statuts</h2>
          <div className="space-y-2">
            <p><strong>Certifié:</strong> {boutiqueData.iscert ? '✅ Oui' : '❌ Non'}</p>
            <p><strong>Désactivé:</strong> {boutiqueData.isdesactive ? '✅ Oui' : '❌ Non'}</p>
            <p><strong>Boosté:</strong> {boutiqueData.isboosted ? '✅ Oui' : '❌ Non'}</p>
            <p><strong>Promu:</strong> {boutiqueData.isPromoted ? '✅ Oui' : '❌ Non'}</p>
            <p><strong>Supprimé:</strong> {boutiqueData.isdelete ? '✅ Oui' : '❌ Non'}</p>
            <p><strong>Gestion SAV:</strong> {boutiqueData.gererSAV ? '✅ Oui' : '❌ Non'}</p>
            <p><strong>Top:</strong> {boutiqueData.top ? '✅ Oui' : '❌ Non'}</p>
          </div>
        </div>

        {/* Services proposés */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Services proposés</h2>
          <ul className="space-y-2">
            {boutiqueData.lesServices.map((service, index) => (
              <li key={index}>
                <strong>{service.nom}:</strong> {service.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Catégories d'articles */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Catégories d'articles</h2>
          <ul className="space-y-2">
            {boutiqueData.lesCategories.map((categorie, index) => (
              <li key={index}>
                <strong>{categorie.nom}:</strong> {categorie.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Personnel */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Personnel</h2>
          <ul className="space-y-2">
            {boutiqueData.lePersonnel.map((person, index) => (
              <li key={index}>
                <strong>{person.nom}:</strong> {person.role}
              </li>
            ))}
          </ul>
        </div>

        {/* Articles en vedette */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Articles en vedette</h2>
          <ul className="space-y-4">
            {boutiqueData.alaune.map((article, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img src={article.image} alt={article.nom} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <strong>{article.nom}</strong>
                  <p>{article.prix} FCFA</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Articles disponibles */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Articles disponibles</h2>
          <ul className="space-y-4">
            {boutiqueData.lesArticles.map((article, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img src={article.image} alt={article.nom} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <strong>{article.nom}</strong>
                  <p>{article.prix} FCFA</p>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Clients dans un tableau */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-full">
          <h2 className="text-xl font-bold mb-4">Clients</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left">Nom</th>
                  <th className="py-3 px-4 border-b text-left">Email</th>
                  <th className="py-3 px-4 border-b text-left">Téléphone</th>
                </tr>
              </thead>
              <tbody>
                {boutiqueData.lesClients.map((client, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{client.nom}</td>
                    <td className="py-3 px-4 border-b">{client.email}</td>
                    <td className="py-3 px-4 border-b">{client.tel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Consultes */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-full">
          <h2 className="text-xl font-bold mb-4">Consultes</h2>
          <ul className="space-y-2">
            {boutiqueData.lesConsultes.map((consulte, index) => (
              <li key={index}>
                <strong>{consulte.nom}:</strong> {consulte.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;