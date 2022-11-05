const express = require ('express')
const { route } = require ('./routes/index.routes')
const app = express()

app.use(require('./routes/index.routes'))

app.listen(3000, () =>{
    console.log(`Servidor escuchando por el puerto 3000`)
})