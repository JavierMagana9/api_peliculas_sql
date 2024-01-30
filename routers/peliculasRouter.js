const express = require('express')
const router = express.Router()

const {getPeliculas,crearPelicula, actualizarPelicula} = require('../controllers/peliculasController')


//mostrar todos
router.get('/movies', getPeliculas)
//mostrar una pelicula

//crear
router.post('/createMovie', crearPelicula)
//actualizar
router.put('/editMovie/:id', actualizarPelicula)

//eliminar

module.exports = router