
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM cars');
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM cars WHERE id = ?', [req.params.id]);
  res.json(rows[0] || {});
});

router.post('/', async (req, res) => {
  const { brand, model, year, price } = req.body;
  const [result] = await db.query(
    'INSERT INTO cars (brand, model, year, price) VALUES (?, ?, ?, ?)',
    [brand, model, year, price]
  );
  res.json({ id: result.insertId, brand, model, year, price });
});

router.put('/:id', async (req, res) => {
  const { brand, model, year, price } = req.body;
  await db.query(
    'UPDATE cars SET brand=?, model=?, year=?, price=? WHERE id=?',
    [brand, model, year, price, req.params.id]
  );
  res.json({ message: 'Coche actualizado' });
});

router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM cars WHERE id=?', [req.params.id]);
  res.json({ message: 'Coche eliminado' });
});

module.exports = router;
