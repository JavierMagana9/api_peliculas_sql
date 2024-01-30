
const pool = require('../configs/pgConfig')
const queriesAll = require('../models/queries')

// esto es como el modelo find pero creada por nosotros
//get que traiga todas las peliculas

const getAllPeliculas = async () => {
    //Necesito 2 variables que pide Poll
    //Cliente donde vamos a conectar con la base de datos
    let cliente,
        //resultado obtenemos los datos de la base de datos
        resultado
    try {
        //establecemos la conexion con la base de datos atraves de pool.connect ( previamente instamaciamos el objeto pool para poder asignarle los datos que require para la conexion) 
        cliente = await pool.connect();
        //RESULTADO: En cliente.query nosotros estamos recogiendo la data que nosotros especificamos
        resultado = await cliente.query(queriesAll.querieSelectAll);
        // console.log("en getPeliculas", resultado)



        //aca podemos observar como recogemos los datos que se encuentran alojados en ROWS
        //const datos = resultado.rows;
        // console.log("Datos", datos)


    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        //lo que se encarga es que en cada consulta mate la base de datos
        cliente.release()
    }
    //estoy enviado todos los datos que estan alojados en el Array rows

    return resultado.rows
}






//get que me traiga una pelicula

//crear una pelicula

//actualizar una pelicula

const putPelicula = async (body,id_pelicula) => {
     console.log("modeloPelicula",body,id_pelicula)
    let cliente,
        resultado
const {titulo,anio,director, genero,duracion, imagen}=body
    try {
        cliente = await pool.connect();
        resultado = await cliente.query(queriesAll.querieUpdate, [titulo,anio,director, genero,duracion, imagen, id_pelicula]);

        

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        cliente.release()
    }

return resultado
}


//eliminar una pelicula
//getAllPeliculas()
//putPelicula()

module.exports = {
    getAllPeliculas,
    putPelicula
}