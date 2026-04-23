const db = require("../config/db");

const getAllResep = (req, res) => {
  const sql = `
    SELECT 
      r.id,
      r.nama,
      r.kategori,
      r.kesulitan,
      b.nama_bahan,
      l.deskripsi
    FROM resep r
    LEFT JOIN bahan b ON r.id = b.resep_id
    LEFT JOIN langkah l ON r.id = l.resep_id
    ORDER BY r.id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    const grouped = {};

    result.forEach((row) => {
      if (!grouped[row.id]) {
        grouped[row.id] = {
          id: row.id,
          nama: row.nama,
          kategori: row.kategori,
          kesulitan: row.kesulitan,
          bahan: [],
          langkah: []
        };
      }

      if (
        row.nama_bahan &&
        !grouped[row.id].bahan.includes(row.nama_bahan)
      ) {
        grouped[row.id].bahan.push(row.nama_bahan);
      }

      if (
        row.deskripsi &&
        !grouped[row.id].langkah.includes(row.deskripsi)
      ) {
        grouped[row.id].langkah.push(row.deskripsi);
      }
    });

    res.json(Object.values(grouped));
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

    res.status(201).json({
      message: "Resep berhasil ditambahkan"
    });
  });
};

const deleteResep = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM resep WHERE id = ?";

  db.query(sql, [id], (err) => {
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