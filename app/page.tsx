import BoutiqueHeader from '../components/BoutiqueHeader';
import BoutiqueInfo from '../components/BoutiqueInfo';
import BoutiqueServices from '../components/BoutiqueServices';
import BoutiqueClients from '../components/BoutiqueClients';
import BoutiqueArticles from '../components/BoutiqueArticles';
import BoutiqueCategories from '../components/BoutiqueCategories';
import BoutiqueAlaune from '../components/BoutiquesAlaune';
import { boutiqueData } from "../data";



export default function Home() {
  return (
    <div className="container mx-auto p-4">


      <BoutiqueHeader nom={boutiqueData.nom} desc={boutiqueData.desc} cover={boutiqueData.cover} duree={boutiqueData.duree} />


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
        <BoutiqueClients lesClients={boutiqueData.lesClients} />
        <BoutiqueArticles lesArticles={boutiqueData.lesArticles} />
        <BoutiqueCategories lesCategories={boutiqueData.lesCategories} />
        <BoutiqueAlaune alaune={boutiqueData.alaune} />
      </div>
    </div>
  );
}