/*'use strict'
//para que no se puedan usar variables que no han sido definidas
try {
    

    //para arrojar errores propios
    throw 'Mi error';
} catch (error) {
    console.log(error);
}
finally{
    //este bloque de código siempre se va a ejecutar, después del trycatch
    console.log('termina la revisión de errores');
}

console.log('continuamos');
*/



let resultado = '';

try{
    if(isNaN(resultado)) throw 'No es un número maní';
    else if(resultado === '') throw 'Es una cadena vacía';
    else if (resultado < 0 ) throw 'Es un número negativo'
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
console.log('hola');
