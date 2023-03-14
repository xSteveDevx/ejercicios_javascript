//determinar si una variable es un objeto plano


//objetos planos
let objetoPlano1 = {};
let objetoPlano2 = new Object();


//objetos no planos
let fecha = new Date();
let cadena = new String();

//saber si es plano o no
console.log(objetoPlano1.constructor === Object);
console.log(fecha.constructor === Object);