const express = require('express')
const {check} = require('express-validator')
const router = express.Router()

const {getPeliculas,crearPelicula, actualizarPelicula,buscarPeliPorTitulo} = require('../controllers/peliculasController')
const {validarCrearPelicula} = require('../middleware/validarPeliculas')

//mostrar todos
router.get('/movies', getPeliculas)
//mostrar una pelicula
router.get('/search/:title', buscarPeliPorTitulo)
//crear titulo,anio,director, genero,duracion, imagen
router.post('/createMovie', [
    check('titulo', 'Por favor, introduce un titulo').not().isEmpty().trim(),
    check('anio', 'Por favor, introduce un año desde 1900 hasta el año actual').not().isEmpty().isInt({ min: 1900, max: new Date().getFullYear() }),
    check('director', 'Por favor, introduce el nombre de un director').not().isEmpty().trim(),
    check('genero', 'Por favor, introduce un género').not().isEmpty().trim(),
    check('imagen', "Por favor, introduce una URL válida").not().isEmpty().isURL(),
    validarCrearPelicula
],
crearPelicula)
//actualizar
router.put('/editMovie/:id', actualizarPelicula)

//eliminar

module.exports = router