import { boutiqueData } from '@/data';

const Savings = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Savings</h1>
            <p>Nombre d'articles: {boutiqueData.nbrArticle}</p>
            <p>Type: {boutiqueData.type}</p>
        </div>
    );
};

export default Savings;
