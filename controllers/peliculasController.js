const { getAllPeliculas } = require('../models/modelPeliculas')

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
//get que me traiga una pelicula

//crear una pelicula

//actualizar una pelicula

//eliminar una pelicula

module.exports = {
    getPeliculas
}
