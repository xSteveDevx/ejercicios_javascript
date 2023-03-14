//crear una funcion que retorne la longitud de la ultima palabra de la cadena que se ingresa

function saberLongitudPalabra(str){
    let separado = str.split(' ');
    return separado[separado.length-1].length + ' la palabra es ' + separado[separado.length-1];

    
    
}

let imprimir = saberLongitudPalabra('hola, como estan adios, me la re chupan mmgvos todos');
console.log(imprimir);