const express = require('express');
const SalesController = require('../controllers/salesController');

const router = express.Router();

router.get('/', (req, res) => SalesController.showForm(req, res));
router.post('/results', (req, res) => SalesController.getResults(req, res));

module.exports = router;
