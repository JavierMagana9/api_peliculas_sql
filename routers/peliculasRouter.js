const express = require('express')
const router = express.Router()
const {getPeliculas} = require('../controllers/peliculasController')

//mostrar todos
router.get('/', getPeliculas)
//mostrar uno

//crear

//actualizar

//eliminar

module.exports = router