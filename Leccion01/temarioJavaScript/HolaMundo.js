var nombre = "Steven";
console.log(nombre);

//tipo boolean
let booleana = true;
console.log(typeof booleana);

//una funcion tambien es un tipo de dato 
function miFuncion(){

}
console.log(typeof miFuncion);

//tipo de dato symbol, se usa para crear un valor unico de una variable
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//las clases tambien son funciones 
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);



//tipo undefined, se puede usar como un valor a una variable
var x;
console.log(typeof x);

//nule = ausencia de valor, similar a undefined pero no igual
var y = null;
console.log(typeof y);


//los arreglos tambien son objetos
var autos = ['Bmw', 'audi', 'volvo'];
console.log(autos);
console.log(typeof autos);


//se puede indicar que una variable contiene un valor vacio
var z = '';
console.log(z);
console.log(typeof z);


