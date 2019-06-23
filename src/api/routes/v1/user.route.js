const express = require('express');
const router = express.Router();

const UserController = require('@controllers/user.controller');

router.get('/', UserController.get);
router.post('/', UserController.post);

module.exports = router;
