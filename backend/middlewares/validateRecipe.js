const validateRecipe = (req, res, next) => {
  const { nama, kategori, kesulitan, bahan, langkah } = req.body;

  if (!nama || !kategori || !kesulitan) {
    return res.status(400).json({ message: "Data utama wajib diisi" });
  }

  if (!Array.isArray(bahan) || bahan.length < 1) {
    return res.status(400).json({ message: "Minimal 1 bahan" });
  }

  if (!Array.isArray(langkah) || langkah.length < 1) {
    return res.status(400).json({ message: "Minimal 1 langkah" });
  }

  next();
};

module.exports = validateRecipe;