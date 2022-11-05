const principalPath = require('../utils/path')
const path = require('path')
const controller={}

controller.hola = (req, res) => {
res.sendFile(path.join(principalPath, 'views', 'Hola.html'))
}

controller.createUser = (req, res) => {
    res.sendFile(path.join(principalPath, 'views', 'Forms.html'))
    }

controller.error = (req, res) => {
res.sendFile(path.join(principalPath, 'views', 'error.html'))
}

module.exports = controller