import RecipeCard from "./RecipeCard";

function RecipeList({
  data,
  deleteRecipe
}) {
  return (
    <div className="grid-container">
      {data.map((item) => (
        <RecipeCard
          key={item.id}
          resep={item}
          deleteRecipe={deleteRecipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;