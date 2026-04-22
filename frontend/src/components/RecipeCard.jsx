function RecipeCard({ resep }) {
  return (
    <div className="card">
      <h2>{resep.nama}</h2>
      <p>Kategori: {resep.kategori}</p>
      <p>Kesulitan: {resep.kesulitan}</p>
    </div>
  );
}

export default RecipeCard;