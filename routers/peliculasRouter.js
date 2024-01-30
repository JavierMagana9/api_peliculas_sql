const express = require('express')
const router = express.Router()
const {getPeliculas,actualizarPelicula} = require('../controllers/peliculasController')

//mostrar todos
router.get('/movies', getPeliculas)
//mostrar una pelicula

//crear

//actualizar
router.put('/editMovie/:id', actualizarPelicula)

//eliminar

module.exports = router