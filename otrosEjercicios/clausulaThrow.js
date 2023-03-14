//uso de la clausula throw en javaScript
//se usa para arrojar nuestros propios errores
'use strict'

// try {
//     let x = 10;
//     throw 'Mi Error';
// } catch (error) {
//     console.log(error);
    
// }
// finally{
//     console.log('termina la revisión de errores');
// }


let resultado = -35;
try {
    if(isNaN(resultado)) throw 'No es un número';
    else if(resultado ==='') throw 'Es una cadena vacía';
    else if(resultado < 0) throw 'Es un valor negativo';
    
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
