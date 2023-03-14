//saber si una cadena empieza con una palabra especifica

let cadena = 'hola, cómo estás';


function saberInicioCadena(cadena, palabra){
    let separado = cadena.split(' ');
    if(separado[0] == palabra){
        console.log('la cadena ' + cadena + ' empieza con la palabra ' + palabra);
    }
    else{
        console.log(`la cadena no inicia con la palabra ${palabra}`);
    }
}
saberInicioCadena('hola como estas', 'adios');

//saber si cadena inicia con palabra especifica con método
//este método es sensible a minúsculas y mayúsculas
console.log(cadena.startsWith('hola'));

function verifyString(str, word){
    let arr = str.split(' ');
    return arr[0] == word;
}
console.log(verifyString("bienvenidos amigos", "bienvenidos"));