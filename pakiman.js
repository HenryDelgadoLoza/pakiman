//ESTE APARTADO ES UNICAMENTE PARA LA CREACION DE LA CLASE PAKIMAN

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