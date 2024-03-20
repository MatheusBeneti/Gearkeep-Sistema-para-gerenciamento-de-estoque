const express = require('express')
const router = express.Router()

const partsController = require('../controllers/Parts')

router.get('/', partsController.getAllParts);

module.exports = router