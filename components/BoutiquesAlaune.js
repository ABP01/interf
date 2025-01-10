

const BoutiqueAlaune = ({ alaune }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">A la une :</h2>
      <ul>
        {alaune.map((laune, index) => (
          <li key={index}>{laune}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoutiqueAlaune;
