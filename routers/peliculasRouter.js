const express = require('express')
const router = express.Router()
const {getPeliculas,crearPelicula} = require('../controllers/peliculasController')

//mostrar todos
router.get('/movies', getPeliculas)
//mostrar uno

//crear
router.post('/createMovie', crearPelicula)
//actualizar

//eliminar

module.exports = router