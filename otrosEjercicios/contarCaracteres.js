//funcion para saber cual es la longitud de una cadena, sin usar length
function contarCaracteres(cadena){
    let caracteres = cadena.split("");
    let auxiliar = 0;
    caracteres.forEach(letra => {
        auxiliar++;
    });
    return auxiliar;
    
}

console.log(contarCaracteres('mmgvazo'));
