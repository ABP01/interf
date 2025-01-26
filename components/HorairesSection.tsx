import React from 'react';
import boutiqueData from '@/data';

const HorairesSection = () => {
  const horaires = boutiqueData.horaires;

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold">Horaires</h2>
      <table className="mt-4 w-full text-left">
        <thead>
          <tr className="text-gray-700 font-bold border-b">
            <th className="py-2">Jour</th>
            <th className="py-2">Ouverture</th>
            <th className="py-2">Fermeture</th>
          </tr>
        </thead>
        <tbody>
          {horaires.map((horaire, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{horaire.jour}</td>
              <td className="py-2">{horaire.start}h:{horaire.start_min}</td>
              <td className="py-2">{horaire.end}h:{horaire.end_min}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorairesSection;