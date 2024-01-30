const {validationResult} = require('express-validator')

const validarCrearPelicula = (req, res, next) => {

const errors = validationResult(req)
console.log(errors)

if(!errors.isEmpty()){
    return res.status(400).json({
        error: true,
        errors: errors.mapped()
    })

}

next()
}


module.exports = {validarCrearPelicula}