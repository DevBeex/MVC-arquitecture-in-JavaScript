const express = require ('express')
const router = express.Router()
const controller = require('../controllers/index.controller')

router.get('/', controller.hola)
router.get('/new-user', controller.createUser)
router.get('*', controller.error)

module.exports = router