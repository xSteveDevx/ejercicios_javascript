//crear fecha a partir de cadena de caracteres
let fecha = 'May 13, 1915';
let nueva = new Date(fecha);
console.log(typeof(nueva));


//evaluar si una variable es tipo date
if(nueva instanceof Date){
    console.log('es tipo date');
}