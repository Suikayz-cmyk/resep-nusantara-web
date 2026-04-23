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

  const handleArrayChange = (type, index, value) => {
    const updated = [...formData[type]];
    updated[index] = value;

    setFormData({
      ...formData,
      [type]: updated
    });
  };

  const addField = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], ""]
    });
  };

  const removeField = (type, index) => {
    const updated = [...formData[type]];
    updated.splice(index, 1);

    setFormData({
      ...formData,
      [type]: updated
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

          <button onClick={() => setIsOpen(false)}>
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

        <h3 className="section-title">Bahan</h3>

        {formData.bahan.map((item, index) => (
          <div key={index} className="dynamic-row">
            <input
              type="text"
              placeholder={`Bahan ${index + 1}`}
              value={item}
              onChange={(e) =>
                handleArrayChange(
                  "bahan",
                  index,
                  e.target.value
                )
              }
            />

            {formData.bahan.length > 1 && (
              <button
                className="remove-btn"
                onClick={() =>
                  removeField("bahan", index)
                }
              >
                ✖
              </button>
            )}
          </div>
        ))}

        <button
          className="mini-btn"
          onClick={() => addField("bahan")}
        >
          + Tambah Bahan
        </button>

        <h3 className="section-title">Langkah</h3>

        {formData.langkah.map((item, index) => (
          <div key={index} className="dynamic-row">
            <input
              type="text"
              placeholder={`Langkah ${index + 1}`}
              value={item}
              onChange={(e) =>
                handleArrayChange(
                  "langkah",
                  index,
                  e.target.value
                )
              }
            />

            {formData.langkah.length > 1 && (
              <button
                className="remove-btn"
                onClick={() =>
                  removeField("langkah", index)
                }
              >
                ✖
              </button>
            )}
          </div>
        ))}

        <button
          className="mini-btn"
          onClick={() => addField("langkah")}
        >
          + Tambah Langkah
        </button>

        <button className="submit-btn">
          Submit Resep
        </button>
      </div>
    </div>
  );
}

export default AddRecipeModal;