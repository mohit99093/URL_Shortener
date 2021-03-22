const express = require('express')
const router = new express.Router()
const index = require('../controllers/index')

router.post('/api/encode', index.encode)
router.post('/api/decode', index.decode)

module.exports = router
