const express = require('express')
const router = express.Router()

const {getPeliculas,crearPelicula, actualizarPelicula,buscarPeliPorTitulo,borrarPelicula} = require('../controllers/peliculasController')


//mostrar todos
router.get('/movies', getPeliculas)
//mostrar una pelicula
router.get('/search/:title', buscarPeliPorTitulo)
//crear
router.post('/createMovie', crearPelicula)
//actualizar
router.put('/editMovie/:id', actualizarPelicula)

//eliminar
router.delete('/removeMovie/:id',borrarPelicula)

module.exports = router