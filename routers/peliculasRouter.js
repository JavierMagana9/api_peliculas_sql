const express = require('express')
const router = express.Router()
const {getPeliculas} = require('../controllers/peliculasController')

//mostrar todos
router.get('/movies', getPeliculas)
//mostrar uno

//crear

//actualizar

//eliminar

module.exports = router