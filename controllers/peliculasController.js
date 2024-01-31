
const { getAllPeliculas, crearPeliculas, buscarPorTitulo, putPelicula, deletePelicula } = require('../models/modelPeliculas')

//buscar todas las peliculas
const getPeliculas = async (req, res) => {

    try {
        const data = await getAllPeliculas()

        console.log("dentro", data)

        if (!data) {
            //Preguntar al profesor porque no esta entrando a este error y va al500 defrente
            return res.status(400).json({
                error: true,
                msge: "no se conecto a la base de datos SQL"
            })

        }
        return res.status(200).json({
            error: false,
            msg: "recogiendo datos de la base de datos SQL",
            data
        })

    } catch (error) {
        return res.status(500).json({
            error: false,
            msg: 'comuniquese con el administrador'
        })

    }

}

//buscar pelicula por titulo
const buscarPeliPorTitulo = async (req, res) => {

    try {
        
        const titulo = req.params.title
        
        let respuesta = await buscarPorTitulo(titulo)
        
        if(respuesta.length === 0){

            return res.status(404).json({
                error: true,
                msg: ['Pelicula no encontrada'],
            })
        }

        return res.status(200).json({
            error: false,
            msg: ['Pelicula encontrada'],
            respuesta
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            msg: ['Contacte con el administrador']
        })
    }

}

//crear una pelicula
const crearPelicula = async (req, res) => {
    // console.log(req.body)
    try {
        const { titulo } = req.body;

        let respuesta = await buscarPorTitulo(titulo)
        //console.log(respuesta)
        if (respuesta.length > 0) {
            return res.status(400).json({
                error: true,
                msg: ['Ya existe una pelicula con ese nombre']
            })
        }

        respuesta = await crearPeliculas(req.body)

        return res.status(201).json({
            error: false,
            msg: ['Pelicula creada satisfactoriamente']
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            msg: ['Contacte con el administrador']
        })
    }

}

//actualizar una pelicula
const actualizarPelicula = async (req, res) => {

    try {
        const id_pelicula = req.params.id
        //Comprobaremos si hay pelicula con ese titulo , si no la hay continuamos (se hara cuando mergemos)
        const { titulo } = req.body
        let respuesta = await buscarPorTitulo(titulo)
       
        if (respuesta.length > 0) {
            return res.status(400).json({
                error: true,
                msg: ['Ya existe una pelicula con ese nombre']
            })
        }
        await putPelicula(req.body, id_pelicula)
        return res.status(200).json({
            error: false,
            msg: ['la pelicula se actualizo satisfactoriamente'],
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: ['comuniquese con el administrador'],
            error: true,
        })
    }

}

//eliminar una pelicula

const borrarPelicula = async (req, res) => {
    try {
        const id_pelicula = req.params.id
       // console.log("En DELETE", id_pelicula)
        const respuesta = await deletePelicula(id_pelicula)

        if (respuesta.rowCount == 0){
            return res.status(401).json({
                error: true,
                msg: ['El id no existe']
            })  
        }
        //console.log("fila de cuenta", respuesta.rowCount)
        return res.status(200).json({
            error: false,
            msg: ['la pelicula se elimino correctamente'],
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: ['comuniquese con el administrador'],
            error: true,
        })
    }

}


module.exports = {
    getPeliculas,
    actualizarPelicula,
    crearPelicula,
    buscarPeliPorTitulo,
    borrarPelicula
}
