function AddRecipeModal({
  isOpen,
  setIsOpen,
  formData,
  setFormData
}) {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div
      className="modal-overlay"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Tambah Resep</h2>
          <button
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        <input
          type="text"
          name="nama"
          placeholder="Nama Resep"
          value={formData.nama}
          onChange={handleChange}
        />

        <select
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
        >
          <option value="">Pilih Kategori</option>
          <option value="Makanan Utama">
            Makanan Utama
          </option>
          <option value="Snack">Snack</option>
          <option value="Minuman">Minuman</option>
          <option value="Dessert">Dessert</option>
        </select>

        <select
          name="kesulitan"
          value={formData.kesulitan}
          onChange={handleChange}
        >
          <option value="">Pilih Kesulitan</option>
          <option value="Mudah">Mudah</option>
          <option value="Sedang">Sedang</option>
          <option value="Sulit">Sulit</option>
        </select>

        <button className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddRecipeModal;