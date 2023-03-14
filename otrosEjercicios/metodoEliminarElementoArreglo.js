//se solicita crear una funcion para eliminar un elemento de un arreglo
let palabras = ['hola', 'adios', 'mmgvo', 'mmñema'];

function eliminarElemento(palabra) {
    let elemento = palabras.indexOf(palabra);
    palabras.splice(elemento, 1);
    return palabras;
}

console.log(eliminarElemento('mmgvo'));


for(let i = 0; i < palabras.length; i++){
    palabras.pop(palabras[i]);
}
console.log(palabras);