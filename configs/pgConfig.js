
const { Pool } = require('pg')
//Necesitamos instancias el objeto Poll para poder utilizar y conectar con nuestra base de datos, la cual se encuentra en Postgres y necesitamos darle las conexiones como host,user,database y password
// Se utiliza para administrar las conexiones con una base de datos PostgresSQL.
//Actua como un reservorio de conexiones de cleinte que se puede reutilizar para solicitudes posteriores.
const pool = new Pool({

    //La propiedad connectionString especifica los detalles de conexion para la base de datos Postgres
    //CONNECTTRENDER es la variable de entorno en la cual nosotros atraves de un URL recogemos el host,user,password

    connectionString:process.env.CONNECTRENDER,
    
// tenemos que utilizar SSL para indicar que la conexion encriptada es segura y pueda conectarse, garantizando la seguridad entre los intercambios de informacion que tendremos con la base de datos
     ssl:true

    // user: process.env.USERNAMEPG,
    // database: process.env.DATABASE,
    // password: process.env.PASSWORD
})

module.exports=pool
