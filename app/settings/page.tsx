// app/settings.tsx
import React from 'react';
import { boutiqueData } from '@/data';

const Settings = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p>Id: {boutiqueData.id}</p>
      <p>Certifié: {boutiqueData.iscert ? 'Oui' : 'Non'}</p>
      <p>Désactivé: {boutiqueData.isdesactive ? 'Oui' : 'Non'}</p>
      <p>Boosté: {boutiqueData.isboosted ? 'Oui' : 'Non'}</p>
      <p>Certifié: {boutiqueData.iscert ? 'Oui' : 'Non'}</p>
      <p>Promu: {boutiqueData.isPromoted ? 'Oui' : 'Non'}</p>
      <p>Delete: {boutiqueData.isdelete ? 'Oui' : 'Non'}</p>
      <p>Gestion SAV: {boutiqueData.gererSAV ? 'Oui' : 'Non'}</p>
      <p>Top: {boutiqueData.top ? 'Oui' : 'Non'}</p>
    </div>
  );
};

export default Settings;