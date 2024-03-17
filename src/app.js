const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {config} = require('dotenv')

config()
const bookRoutes = require('./routes/book.routes')

const app = express();
//PARSEAR EL BODY 
app.use(bodyParser.json()) //Parseamos el body que recibamos

//Conectamos la base de datos:
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;

//si es /books en el navegador, va a buscar solo las rutas de los libros
app.use('/books', bookRoutes)

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(process.env.MONGO_URL)
    console.log(process.env.MONGO_PASS)
    console.log(`Servidor iniciado en el puerto ${port}`)
})