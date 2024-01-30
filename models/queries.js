
const queriesAll = {
    querieSelectAll: 'SELECT * FROM peliculas',
    querieUpdate: `UPDATE peliculas
                  SET titulo = $1, 
                         anio = $2, 
                        director = $3,
                        genero = $4,
                        duracion = $5,
                        imagen= $6
                 WHERE id_pelicula=$7;`
}

module.exports = queriesAll
