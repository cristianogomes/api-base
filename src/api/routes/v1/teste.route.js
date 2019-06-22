const express = require('express');
const router = express.Router();

const TesteController = require('@controllers/teste.controller');

router.route('/').get(TesteController.get);

module.exports = router;
