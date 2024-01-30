
const queriesAll = {
       querieSelectAll: 'SELECT * FROM peliculas',
       querieCrearPelicula: `INSERT INTO peliculas(titulo, anio, director, genero, duracion, imagen)
                         VALUES ($1, $2, $3, $4, $5, $6)`,
       querieBuscarPorTitulo: `SELECT *
                            FROM peliculas
                            WHERE titulo = $1
                            LIMIT 1` ,
       querieUpdate: `UPDATE peliculas
                  SET titulo = $1, 
                         anio = $2, 
                        director = $3,
                        genero = $4,
                        duracion = $5,
                        imagen= $6
                 WHERE id_pelicula=$7;`,
       querieDelete: `DELETE FROM peliculas
                 WHERE id_pelicula=$1`
}



module.exports = queriesAll

