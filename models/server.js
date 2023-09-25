const express = require('express')
const cors = require('cors')
const router = require('../routes/users')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        // ejecucion de middlewaress
        this.middlewares()

        // ejecucion de rutas
        this.routes()
    }

    // middlewares

    middlewares() {
        // middleware para cors
        this.app.use(cors())

        // parseo y lectura del body
        this.app.use(express.json())

        // middleware para servir contenido estatico
        this.app.use(express.static('public'))

    }

    // metodos
    routes() {
        // podemos responder con diferentes status (res.status(404).json)

        // utilizamos un middleware para utilizar el archivo de rutas

        this.app.use(this.usersPath, router) // ruta de usuarios
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Listening on port: ${this.port}`))
    }
}

module.exports = Server