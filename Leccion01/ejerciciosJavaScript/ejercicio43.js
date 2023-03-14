//recorrer arreglo con forEach
lenguajes = ['hola', 'adios', 'buenas'];
lenguajes.forEach(saludos => {
    console.log(saludos);   
});

//encontrar la cadena mas larga de un arreglo
function cadenaMasLarga(cadenas) {

    let candidata = cadenas[0];
 
    for (let i = 1; i < cadenas.length; i++) {
        if (cadenas[i].length > candidata.length) {
            candidata = cadenas[i];
        }
    }
 
    return candidata;
 
 }

 console.log(cadenaMasLarga(lenguajes));



