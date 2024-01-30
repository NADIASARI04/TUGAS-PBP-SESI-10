const express = require('express');
const router = express.Router();

const db = require('../models/db');

// GET /dosen_kaprodi
router.get('/', (req, res) => {
  db.query('SELECT * FROM dosen_kaprodi', (error, results) => {
    if (error) {
      console.error('Error fetching dosen_kaprodi:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.json(results);
    }
  });
});

// GET /dosen_kaprodi/:NIDN
router.get('/:NIDN', (req, res) => {
  const dosen_kaprodild = req.params.NIDN;
  db.query('SELECT * FROM dosen_kaprodi WHERE NIDN = ?', [dosen_kaprodild], (error, results) => {
    if (error) {
      console.error('Error fetching dosen_kaprodi:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else if (results.length == 0) {
      res.status(404).json({ message: 'dosen_kaprodi not found' });
    } else {
      res.json(results[0]);
    }
  });
});

// PUT /dosen_kaprodi/:NIDN
router.put('/:NIDN', (req, res) => {
  const dosen_kaprodiNIDN = req.params.NIDN;
  const { nama, gender, kaprodi, alamat } = req.body;
  db.query('UPDATEdosen_kaprodi SET nama = ?, gender = ?, kaprodi = ?, alamat = ? WHERE NIDN = ?',
    [nama, gender, kaprodi, alamat, dosen_kaprodiaNIDN], (error) => {
      if (error) {
        console.error('Error updating dosen_kaprodi:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      } else {
        res.json({ message: 'Updating dosen_kaprodi Successful' });
      }
    });
});

module.exports = router;