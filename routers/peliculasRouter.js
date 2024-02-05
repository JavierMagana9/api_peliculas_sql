const express = require('express')
const {check} = require('express-validator')
const router = express.Router()


const {getPeliculas,crearPelicula, actualizarPelicula,buscarPeliPorTitulo,borrarPelicula,buscarPeliPorID } = require('../controllers/peliculasController')
const {validarInput} = require('../middleware/validarInputs')


//mostrar todos
router.get('/search', getPeliculas)
//mostrar una pelicula por titulo
router.get('/search/:title', buscarPeliPorTitulo)
//buscar un peli por ID
router.get('/search/peli/:id', buscarPeliPorID)
//crear titulo,anio,director, genero,duracion, imagen
router.post('/createMovie', [
    check('titulo', 'Por favor, introduce un titulo').not().isEmpty().trim(),
    check('anio', 'Por favor, introduce un año desde 1900 hasta el año actual').not().isEmpty().isInt({ min: 1900, max: new Date().getFullYear() }),
    check('director', 'Por favor, introduce el nombre de un director').not().isEmpty().trim(),
    check('genero', 'Por favor, introduce un género').not().isEmpty().trim(),
    check('imagen', "Por favor, introduce una URL válida").not().isEmpty(),
    validarInput
],
crearPelicula)
//actualizar
router.put('/editMovie/:id',[
    check('titulo', 'Por favor, introduce un titulo').not().isEmpty().trim(),
    check('anio', 'Por favor, introduce un año desde 1900 hasta el año actual').not().isEmpty().isInt({ min: 1900, max: new Date().getFullYear() }),
    check('director', 'Por favor, introduce el nombre de un director').not().isEmpty().trim(),
    check('genero', 'Por favor, introduce un género').not().isEmpty().trim(),
    check('imagen', "Por favor, introduce una URL válida").not().isEmpty(),
    validarInput
], 
actualizarPelicula)

//eliminar
router.delete('/removeMovie/:id',borrarPelicula)

module.exports = router