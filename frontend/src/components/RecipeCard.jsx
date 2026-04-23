import { useState } from "react";

function RecipeCard({ resep }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <div
        className="card-header"
        onClick={() => setOpen(!open)}
      >
        <h2>{resep.nama}</h2>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      <p>Kategori: {resep.kategori}</p>
      <p>Kesulitan: {resep.kesulitan}</p>

      <div className={`accordion ${open ? "show" : ""}`}>
        <div className="accordion-content">
          <h4>Bahan:</h4>
          <ul>
            <li>Bahan tersedia di database</li>
            <li>Versi detail menyusul phase berikutnya</li>
          </ul>

          <h4>Langkah:</h4>
          <ol>
            <li>Siapkan bahan</li>
            <li>Masak dengan benar</li>
            <li>Sajikan hangat</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;