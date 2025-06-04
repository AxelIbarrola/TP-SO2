const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.status(201).send("Ax")
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

