const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/detalleMenu', mainController.detalleMenu);
/*router.get('/detalle/:id', mainController.findById);*/

module.exports = router;