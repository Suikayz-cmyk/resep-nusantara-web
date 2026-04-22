function FilterBar({
  kategori,
  setKategori,
  kesulitan,
  setKesulitan,
}) {
  return (
    <div className="filter-bar">
      <select
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
      >
        <option value="">Semua Kategori</option>
        <option value="Makanan Utama">Makanan Utama</option>
        <option value="Snack">Snack</option>
        <option value="Minuman">Minuman</option>
        <option value="Dessert">Dessert</option>
      </select>

      <select
        value={kesulitan}
        onChange={(e) => setKesulitan(e.target.value)}
      >
        <option value="">Semua Kesulitan</option>
        <option value="Mudah">Mudah</option>
        <option value="Sedang">Sedang</option>
        <option value="Sulit">Sulit</option>
      </select>
    </div>
  );
}

export default FilterBar;