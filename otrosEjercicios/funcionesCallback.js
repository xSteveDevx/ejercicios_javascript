//las funciones callback son las que se pasan como parametro a otra funcion 
function miFuncion(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('funcion 2');
}

//las llamadas a las funciones en js son secuenciales


function imprimir(mensaje){
    console.log(mensaje);
}


//aqui pasamos la otra funcion como parametro e imprimimos esa variable por medio de la funcion del parametro
function sumar(a,b, funcionCallback){
    let suma = a + b;
    funcionCallback(suma);
}
sumar(30, 5, imprimir);


//llamadas asincronas con uso de setTimeout
function tipoCallBack(){
console.log('saludo asíncrono después de 3 segundos');
}
//esto permite tener varios procesos en pararlelo}}
setTimeout(tipoCallBack, 3000);

setTimeout(() => console.log('saludos asíncronos'), 4000);