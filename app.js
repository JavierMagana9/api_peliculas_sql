const express = require('express')
require('dotenv').config()
const cors = require('cors')


const port = process.env.PORT||5000
const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use(cors())


app.use('/api/v1', require('./routers/peliculasRouter'))



app.use((req, res) => {
    res.status(404).json({
        error:true,
        msg:"404 Pagina no encontrada"
    })
})

app.listen(port, ()=>{
    console.log(`servidor a la escucha del puerto ${port}`)
})