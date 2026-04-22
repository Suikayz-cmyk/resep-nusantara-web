import { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/resep");
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>🍛 Resep Nusantara</h1>
      <RecipeList data={recipes} />
    </div>
  );
}

export default App;