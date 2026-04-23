import { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "./components/RecipeList";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import AddRecipeModal from "./components/AddRecipeModal";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const [recipes, setRecipes] = useState([]);

  const [kategori, setKategori] = useState("");
  const [kesulitan, setKesulitan] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    kategori: "",
    kesulitan: "",
    bahan: [""],
    langkah: [""]
  });

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
  try {
    setLoading(true);

    const response = await axios.get(
      "http://localhost:5000/api/resep"
    );

    setRecipes(response.data);

  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

const submitRecipe = async () => {
  try {
    const bahanValid = formData.bahan.filter(
      (item) => item.trim() !== ""
    );

    const langkahValid = formData.langkah.filter(
      (item) => item.trim() !== ""
    );

    if (bahanValid.length < 1) {
      alert("Minimal 1 bahan wajib diisi");
      return;
    }

    if (langkahValid.length < 1) {
      alert("Minimal 1 langkah wajib diisi");
      return;
    }

    if (
      !formData.nama ||
      !formData.kategori ||
      !formData.kesulitan
    ) {
      alert("Lengkapi data utama");
      return;
    }

    const yakin = window.confirm(
      "Yakin ingin menambah resep?"
    );

    if (!yakin) return;

    await axios.post(
      "http://localhost:5000/api/resep",
      {
        ...formData,
        bahan: bahanValid,
        langkah: langkahValid
      }
    );

    alert("Resep berhasil ditambahkan");

    setIsOpen(false);

    setFormData({
      nama: "",
      kategori: "",
      kesulitan: "",
      bahan: [""],
      langkah: [""]
    });

    getRecipes();

  } catch (error) {
    console.log(error);
    alert("Gagal menambah resep");
  }
};

const deleteRecipe = async (id) => {
    const yakin = window.confirm(
      "Yakin ingin menghapus resep ini?"
    );

    if (!yakin) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/resep/${id}`
      );

      alert("Resep berhasil dihapus");

      getRecipes();

    } catch (error) {
      console.log(error);
      alert("Gagal menghapus resep");
    }
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
      
      <AddRecipeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setFormData={setFormData}
        submitRecipe={submitRecipe}
      />

      <div className="top-bar">
        <FilterBar
          kategori={kategori}
          setKategori={setKategori}
          kesulitan={kesulitan}
          setKesulitan={setKesulitan}
        />

        <button
          className="add-btn"
          onClick={() => setIsOpen(true)}
        >
          + Tambah Resep
        </button>
      </div>

      {loading ? (
        <p className="status-text">
          Loading resep...
        </p>
      ) : currentData.length === 0 ? (
        <p className="status-text">
          Tidak ada resep ditemukan.
        </p>
      ) : (
        <RecipeList
          data={currentData}
          deleteRecipe={deleteRecipe}
        />
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <footer className="footer">
        <p>Resep Nusantara © 2026</p>
      </footer>
    </div>
  );
}

export default App;