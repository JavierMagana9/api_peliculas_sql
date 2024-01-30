
const { Pool } = require('pg')
//Necesitamos instancias el objeto Poll para poder utilizar y conectar con nuestra base de datos, la cual se encuentra en Postgres y necesitamos darle las conexiones como host,user,database y password

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})

module.exports=pool