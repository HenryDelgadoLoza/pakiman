var imagenes = []; //de esta manera se crean ARRAYS 
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

console.log(imagenes);

class Pakiman 
{
    constructor(name, life, attack, defense, type)
    {
        this.imagen = new Image();
        this.nombre = name;
        this.vida = life;
        this.ataque = attack;
        this.defensa = defense;
        this.tipo = type;

        this.imagen.src = imagenes[this.nombre];
        //this.tipo = "tierra" //de esta manera se puede otorgar el "tipo" con this
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen); //"agregar un hijo"
        document.write("<p>");
        document.write("<strong>Nombre: " + this.nombre + "</strong><br />");
        document.write("<strong>Vida: " + this.vida + "</strong><br />");
        document.write("<strong>Ataque: " + this.ataque + "</strong><br />");
        document.write("<strong>Defensa: " + this.defensa + "</strong><br />");
        document.write("<strong>Tipo: " + this.tipo + "</strong><br />");
        document.write("</p>");
        document.write("<hr />");
    }
}

var cauchin = new Pakiman("Cauchin", 100, 80, 50, "tierra");
var pokacho = new Pakiman("Pokacho", 80, 90, 40, "aire");
var tocinauro = new Pakiman("Tocinauro", 120, 120, 80, "fuego");

//pokacho.hablar(); si se desea hacer "hablar"
//console.log(cauchin, pokacho, tocinauro);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();