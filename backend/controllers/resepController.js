const db = require("../config/db");

const getAllResep = (req, res) => {
  const sql = "SELECT * FROM resep ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

const addResep = (req, res) => {
  const { nama, kategori, kesulitan, bahan, langkah } = req.body;

  const sqlResep =
    "INSERT INTO resep (nama, kategori, kesulitan) VALUES (?, ?, ?)";

  db.query(sqlResep, [nama, kategori, kesulitan], (err, result) => {
    if (err) return res.status(500).json(err);

    const resepId = result.insertId;

    bahan.forEach((item) => {
      db.query(
        "INSERT INTO bahan (resep_id, nama_bahan) VALUES (?, ?)",
        [resepId, item]
      );
    });

    langkah.forEach((item, index) => {
      db.query(
        "INSERT INTO langkah (resep_id, urutan, deskripsi) VALUES (?, ?, ?)",
        [resepId, index + 1, item]
      );
    });

    res.status(201).json({ message: "Resep berhasil ditambahkan" });
  });
};

const deleteResep = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM resep WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Resep berhasil dihapus"
    });
  });
};

module.exports = {
  getAllResep,
  addResep,
  deleteResep
};