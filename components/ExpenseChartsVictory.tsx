import dynamic from "next/dynamic";
import React from "react";
import { VictoryBar, VictoryPie, VictoryChart, VictoryTheme } from "victory";
import boutiqueData from "@/data";

// Charger les composants de graphiques dynamiquement (sans SSR)
const ExpenseChartsRecharts = dynamic(
  () => import("../components/ExpenseChartsVictory"),
  { ssr: false }
);

const ExpenseChartsVictory = () => {
  // Données extraites de boutiqueData
  const consultations = boutiqueData.lesConsultes.length;

  const articlesVendus = boutiqueData.lesArticles.map((article, index) => ({
    x: article.nom || `Article ${index + 1}`, // Gestion des noms d'articles
    y: Math.floor(Math.random() * 50) + 10,
  }));

  const evolutionVentes = Array.from({ length: 12 }, (_, i) => ({
    x: `Mois ${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 500,
  }));

  const clientsData = boutiqueData.lesClients.map((client, index) => ({
    x: client, // Nom du client comme label
    y: Math.floor(Math.random() * 50) + 1, // Nombre aléatoire associé
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Graphique en barres pour les consultations */}
      <div>
        <h3 className="text-lg font-bold mb-2">Consultations</h3>
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryBar data={[{ x: "Consultations", y: consultations }]} />
        </VictoryChart>
      </div>

      {/* Graphique en camembert pour les articles vendus */}
      <div>
        <h3 className="text-lg font-bold mb-2">Articles vendus</h3>
        <VictoryPie data={articlesVendus} />
      </div>

      {/* Graphique en barres pour les clients */}
      <div>
        <h3 className="text-lg font-bold mb-2">Clients</h3>
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryBar data={clientsData} />
        </VictoryChart>
      </div>
    </div>
  );
};

export default ExpenseChartsVictory;
