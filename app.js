const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
const port = process.env.PORT 

app.use(cors())

app.use('/api/v1', require('./routers/peliculasRouter'))

app.listen(port, ()=>{
    console.log(`servidor a la escucha del puerto ${port}`)
})