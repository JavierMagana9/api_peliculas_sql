
--tabla de peliculas
CREATE TABLE peliculas (
	id_pelicula serial NOT NULL PRIMARY KEY,
	titulo varchar(100) NOT NULL,
	anio smallint,
	director varchar(255),
	genero varchar(20),
	duracion smallint,
	imagen varchar(255),
	date date DEFAULT CURRENT_DATE
)

--insercion peliculas
INSERT INTO peliculas(titulo, anio, director, genero, duracion, imagen)
VALUES
('mario bros', '2023', 'aaron horvath', 'animacion', '92','https://randomuser.me/api/portraits/thumb/men/45.jpg'),
('gladiator','2000', 'ridley scott', 'accion', '155','https://randomuser.me/api/portraits/thumb/men/45.jpg'),
('rambo', '1982', 'ted kotcheff', 'accion', '82','https://randomuser.me/api/portraits/thumb/men/45.jpg'),
('el padrino', '1972', 'francis ford coppola', 'drama', '177','https://randomuser.me/api/portraits/thumb/men/45.jpg')