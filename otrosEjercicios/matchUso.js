//uso de la funcion match 

let cadena = 'Saludos Amigos';

//para tomar todas las letras de la A a la Z en mayúscula, la g es para indicar que es una expresión regular
let regex = /[A-Z]/g;
let regex2 = /[a-z]/g;

let prueba = cadena.match(regex2);
console.log(prueba);


let encontrado = cadena.match(regex);
console.log(encontrado);