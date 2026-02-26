const express = require("express");
const router = express.Router();
const pool = require("./db");  // ← IMPORTANTE

// Listar todos los coches
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM cars");
  res.json(rows);
});

// Obtener coche por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("SELECT * FROM cars WHERE id = ?", [id]);

  if (rows.length === 0) {
    return res.status(404).json({ error: "Coche no encontrado" });
  }

  res.json(rows[0]);
});

// Crear coche
router.post("/", async (req, res) => {
  const { marca, modelo, year } = req.body;

  const [result] = await pool.query(
    "INSERT INTO cars (marca, modelo, year) VALUES (?, ?, ?)",
    [marca, modelo, year]
  );

  res.json({ id: result.insertId, marca, modelo, year });
});

// Actualizar coche
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, year } = req.body;

  await pool.query(
    "UPDATE cars SET marca = ?, modelo = ?, year = ? WHERE id = ?",
    [marca, modelo, year, id]
  );

  res.json({ id, marca, modelo, year });
});

// Eliminar coche
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM cars WHERE id = ?", [id]);

  res.json({ message: "Coche eliminado" });
});

module.exports = router;
