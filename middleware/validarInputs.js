const {validationResult} = require('express-validator')

const validarInput = (req, res, next) => {

const errors = validationResult(req)
console.log(errors)

if(!errors.isEmpty()){
    return res.status(400).json({
        error: true,
        errors: errors.array()
    })

}

next()
}


module.exports = {validarInput}