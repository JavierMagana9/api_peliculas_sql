const express = require('express')
const router = express.Router()

const {getPeliculas,crearPelicula, actualizarPelicula,buscarPeliPorTitulo} = require('../controllers/peliculasController')


//mostrar todos
router.get('/movies', getPeliculas)
//mostrar una pelicula
router.get('/search/:title', buscarPeliPorTitulo)
//crear
router.post('/createMovie', crearPelicula)
//actualizar
router.put('/editMovie/:id', actualizarPelicula)

//eliminar

module.exports = router