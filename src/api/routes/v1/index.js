const express = require('express');
const testeRoutes = require('./teste.route');

const router = express.Router();

router.use('/teste', testeRoutes);

module.exports = router;
