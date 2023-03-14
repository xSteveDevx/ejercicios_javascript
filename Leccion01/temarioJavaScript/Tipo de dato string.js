//Tipo de dato string

// var nombre = "Daryana";
// console.log(nombre);
function sumar(){
    var resultado = 0;
    var argumentsLength = arguments.length;
    for (let index = 0; index < argumentsLength; index++) {
      resultado += arguments[index];
    }
    return resultado;
}
console.log(sumar(2,10,15,100))

function Personaje(nombre){
    this.nombre = nombre;

}
let personaje1 = new Personaje("Yoda");
console.log(personaje1);

Array.prototype.toString = function(){
    let itemString = "";
    let valor;

    for (let index = 0; index < this.length; index++) {
        valor = this[index];
        itemString += index;
        itemString += valor;
        itemString += typeof(valor)
               
    }
    return itemString;
}
let bandas =["Iron Maiden", "Judas priest", "DIO", "Black Sabbath"];
console.log(bandas.toString());
console.log(bandas);