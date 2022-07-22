var imagenes = []; //de esta manera se crean ARRAYS 
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//AL CREAR EL ARRAY COLECCION DISPONEMOS DIRECTAMENTE DE LA CREACION DE LOS NUEVOS OBJETOS "pakimanes"
/*
var cauchin = new Pakiman("Cauchin", 100, 80, 50, "tierra");
var pokacho = new Pakiman("Pokacho", 80, 90, 40, "aire");
var tocinauro = new Pakiman("Tocinauro", 120, 120, 80, "fuego"); */

//pokacho.hablar(); si se desea hacer "hablar"
//console.log(cauchin, pokacho, tocinauro);

/*
pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar(); */

var coleccion = []; // es importante recordar la sintaxis de los arrays

coleccion.push(new Pakiman("Cauchin", 100, 80, 50, "tierra"));
coleccion.push(new Pakiman("Pokacho", 80, 90, 40, "aire"));
coleccion.push(new Pakiman("Tocinauro", 120, 120, 80, "fuego"));

//ciclo especial, solamente va a operar por la cantidad de objetos que hay en el array, y lo colocará dentro de la variable "p"
//for (var p in coleccion)

//for (var p of coleccion) cuando se requiera utilizar la instancia mas no el índice según EcmaScript 2015 "of"
for (var p of coleccion)
{
    p.mostrar();
}