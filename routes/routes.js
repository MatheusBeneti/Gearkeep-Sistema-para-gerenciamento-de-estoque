const express = require('express')
const router = express.Router()

const PartsController = require('../controllers/PartsController')

router.get('/', PartsController.getAllParts);

module.exports = router