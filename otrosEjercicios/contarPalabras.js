//crear una funcion que cuente las veces que aparece cada palabra en una cadena

let contarRepetidas = (cadena) => {
    let lista = cadena.split(' ');
    let contador = 0;
    let contadorPalabra = 0;
    lista.forEach(element => {
        let palabra = lista[contador];
        if (element == palabra) {
            contadorPalabra++;
            console.log(`la palabra ${palabra} se repite ${contadorPalabra}`)
        }
        else {
            contador++;
        }
        return `la palabra ${palabra} se repite ${contadorPalabra}`;

    });
    
    console.log(lista);
}


console.log(contarRepetidas('saludos compa amigos saludos compa amigos'));