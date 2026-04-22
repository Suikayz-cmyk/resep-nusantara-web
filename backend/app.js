const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

require("./config/db");

app.use(cors());
app.use(express.json());

const resepRoutes = require("./routes/resepRoutes");

app.use("/api/resep", resepRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API jalan" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});