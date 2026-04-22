import RecipeCard from "./RecipeCard";

function RecipeList({ data }) {
  return (
    <div className="grid-container">
      {data.map((item) => (
        <RecipeCard key={item.id} resep={item} />
      ))}
    </div>
  );
}

export default RecipeList;