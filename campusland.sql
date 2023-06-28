CREATE DATABASE campusland ;

USE campusland;

CREATE TABLE campers(
idCamper INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombreCamper VARCHAR(50) NOT NULL,
apellidoCamper VARCHAR(50) NOT NULL,
fechaNac DATE NOT NULL,
FkidReg INT,
Foreign Key (FkidReg) REFERENCES region(idReg)
);

CREATE TABLE region(
idReg INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombreReg VARCHAR(50) NOT NULL,
FkidDep INT,
Foreign Key (FkidDep) REFERENCES departamento(idDep)
);


CREATE TABLE departamento(
idDep INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombreDep VARCHAR(50) NOT NULL,
FkidPais INT,
Foreign Key (FkidPais) REFERENCES pais(idPais)

);
 

CREATE TABLE pais(
idPais INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombrePais VARCHAR(50)
);


INSERT INTO `pais` (`idPais`, `nombrePais`) VALUES
(1, 'Colombia'),
(2, 'Panama');

INSERT INTO `departamento` (`idDep`, `nombreDep`, `FkidPais`) VALUES
(1, 'santander', 1),
(2, 'amazonia', 1);

INSERT INTO `region` (`idReg`, `nombreReg`, `FkidDep`) VALUES
(1, 'bucaramanga', 1),
(2, 'guania', 2);

INSERT INTO `campers` (`idCamper`, `nombreCamper`, `apellidoCamper`, `fechaNac`, `FkidReg`) VALUES
(1, 'Dairon', 'Porras', '2023-06-01', 1),
(2, 'Angela', 'Gomez', '2023-06-05', NULL);