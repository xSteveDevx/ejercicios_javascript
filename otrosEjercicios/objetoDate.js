
let anio = 2002;
let mes = 9
let dia = 11;

let fechaNacimiento = new Date(anio, mes, dia);
let hoy = new Date();

console.log(fechaNacimiento);

let edad = 2022 - fechaNacimiento.getFullYear();
console.log(edad);

let totalDias = hoy - fechaNacimiento;
console.log(totalDias);

let arreglo = ['hola', 'adios', 'buenas tardes', 'mmgvos todos'];

// arreglo.shift();
console.log(arreglo);

let eliminados = arreglo.splice(2, 2);
console.log(arreglo);

let numeros = [0,1,2,3,4,5,6,7,8,9];
let impares = numeros.filter((valor, indice, numeros) => { 
    return valor % 2 == 1;
});
console.log(impares);