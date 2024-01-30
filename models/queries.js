
const queriesAll={
    querieSelectAll:'SELECT * FROM peliculas',
    querieCrearPelicula:`INSERT INTO peliculas(titulo, anio, director, genero, duracion, imagen)
                         VALUES ($1, $2, $3, $4, $5, $6)`,
    querieBuscarPorTitulo: `SELECT *
                            FROM peliculas
                            WHERE titulo = $1
                            LIMIT 1`                      
}



module.exports=queriesAll
