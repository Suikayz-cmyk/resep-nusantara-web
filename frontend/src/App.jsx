import { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "./components/RecipeList";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import AddRecipeModal from "./components/AddRecipeModal";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [kategori, setKategori] = useState("");
  const [kesulitan, setKesulitan] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    kategori: "",
    kesulitan: ""
  });

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/resep"
    );
    setRecipes(response.data);
  };

  // FILTER
  const filteredRecipes = recipes.filter((item) => {
    const cocokKategori =
      kategori === "" ||
      item.kategori === kategori;

    const cocokKesulitan =
      kesulitan === "" ||
      item.kesulitan === kesulitan;

    return cocokKategori && cocokKesulitan;
  });

  // PAGINATION
  const totalPages = Math.ceil(
    filteredRecipes.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentData = filteredRecipes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // reset page kalau filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [kategori, kesulitan]);

  return (
    <div className="container">
      <h1>Resep Nusantara</h1>
      
      <button
        className="add-btn"
        onClick={() => setIsOpen(true)}
      >
        + Tambah Resep
      </button>

      <AddRecipeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setFormData={setFormData}
      />

      <FilterBar
        kategori={kategori}
        setKategori={setKategori}
        kesulitan={kesulitan}
        setKesulitan={setKesulitan}
      />

      <RecipeList data={currentData} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;