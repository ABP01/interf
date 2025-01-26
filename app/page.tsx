"use client"
import HorairesSection from "../components/HorairesSection";
import BoutiqueHeader from "../components/BoutiqueHeader";
import React from "react";
import boutiqueData from "@/data";
import ExpenseChartsVictory from "@/components/ExpenseChartsVictory"; // Importez le composant des graphiques

export default function Home() {
  // Données extraites de boutiqueData pour les graphiques
  const consultations = boutiqueData.lesConsultes.length; // Nombre de consultations
  const articlesVendus = boutiqueData.lesArticles.map((article) => ({
    nom: article.nom,
    quantite: Math.floor(Math.random() * 50) + 10, // Quantité vendue simulée
  }));
  const evolutionVentes = Array.from({ length: 12 }, (_, i) =>
    Math.floor(Math.random() * 1000) + 500
  ); // Évolution des ventes simulée sur 12 mois

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main Content */}
      <div className="mt-6 flex w-full flex-col md:flex-row gap-6">
        {/* Info Boutique Section */}
        <div className="bg-white w-full md:w-2/6 rounded-lg shadow-md p-4">
          <h1 className="text-lg font-bold">Info Boutique</h1>
          <BoutiqueHeader
            nom={boutiqueData.nom}
            desc={boutiqueData.desc}
            cover={boutiqueData.cover}
            duree={boutiqueData.date}
          />
        </div>

        {/* Top Expenses Section */}
        <div className="bg-white w-full md:w-4/6 rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold">Données</h2>
          {/* Remplacez la grille par les graphiques */}
          <div className="mt-4">
          <ExpenseChartsVictory />
          </div>
        </div>
      </div>

      {/* Horaires Section */}
      <HorairesSection />
    </div>
  );
}