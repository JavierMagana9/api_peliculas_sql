
const { getAllPeliculas, crearPeliculas, buscarPorTitulo, putPelicula } = require('../models/modelPeliculas')


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
//get que me traiga una pelicula <-------la ubicara por id_pelicula

const buscarPeliPorTitulo = async(req,res) => {

    try {
        //console.log("req",req)
        const titulo = req.params.title
       
        console.log("titulo",titulo)
        let respuesta = await buscarPorTitulo(titulo)
        console.log("en buscarPeliPorTitulo",respuesta)
        console.log("respuesta",respuesta)
        if(!respuesta.ok){
            return res.status(404).json({
                error: true,
                msg: ['Pelicula no encontrada'],
                respuesta
            })
        }

        return res.status(200).json({
            error:false,
            msg:['Pelicula encontrada']
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
const crearPelicula = async(req, res) => {
   // console.log(req.body)
    try {
        const{titulo} = req.body;

        let respuesta = await buscarPorTitulo(titulo)
        //console.log(respuesta)
        if(respuesta.length > 0){
            return res.status(400).json({
                error:true,
                msg:['Ya existe una pelicula con ese nombre']
            })
        }

        respuesta = await crearPeliculas(req.body)
       
        return res.status(201).json({
            error:false,
            msg:['Pelicula creada satisfactoriamente']
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

       // console.log("en id",id_pelicula)


        //const {titulo} = req.body
//Comprobaremos si hay pelicula con ese titulo , si no la hay continuamos (se hara cuando mergemos)


        const respuesta = await putPelicula(req.body,id_pelicula)

        

            return res.status(200).json({
                error: false,
                msg: ['la pelicula se actualizo satisfactoriamente'],
            })
        

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'comuniquese con el administrador',
            error: true,
        })
    }

}






//eliminar una pelicula

module.exports = {
    getPeliculas,
    actualizarPelicula,
    crearPelicula,
    buscarPeliPorTitulo
}
