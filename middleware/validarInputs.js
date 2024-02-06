const {validationResult} = require('express-validator')

const validarInput = (req, res, next) => {

const errors = validationResult(req)
console.log(errors)

if(!errors.isEmpty()){
    const msg = errors.array().map((item)=>{
        return item.msg
    })
    console.log("msg validarInputs",msg)
    return res.status(400).json({
        error: true,
        msg,
        
    })

}

next()
}


module.exports = {validarInput}