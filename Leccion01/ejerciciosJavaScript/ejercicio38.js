//determinar a que tipo de dato pertenece un objeto 

let fecha = new Date();
let error = new Error();
let blob = new String();
let objeto = new Object();

if(fecha instanceof Date){
    console.log('la variable fecha es de tipo date');
}
else{
    console.log(' no se pudo identificar el tipo de dato de la variable');
}