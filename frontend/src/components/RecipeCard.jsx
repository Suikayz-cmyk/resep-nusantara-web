import { useState } from "react";
import {
  Trash2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

function RecipeCard({
  resep,
  deleteRecipe
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <div
        className="card-header"
        onClick={() => setOpen(!open)}
      >
        <h2>{resep.nama}</h2>
          <div className="header-actions">
        <button
          className="delete-mini-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteRecipe(resep.id);
          }}
        >
          <Trash2 size={16} />
        </button>

        {open ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </div>
      </div>
      

      <p>Kategori: {resep.kategori}</p>
      <p>Kesulitan: {resep.kesulitan}</p>

      <div className={`accordion ${open ? "show" : ""}`}>
       <div className="accordion-content">
        <h4>Bahan:</h4>

        <ul>
          {resep.bahan &&
            resep.bahan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>

        <h4>Langkah:</h4>

        <ol>
          {resep.langkah &&
            resep.langkah.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ol>
      </div>
      </div>
       
    </div>
  );
}

export default RecipeCard;