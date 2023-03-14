//el this siempre se refiere al dueño de la función
//contexto de donde se ejecuta
//las funciones flecha no tienen this
function getName(){
    console.log(this.nick);
} 
global.nick = 'steven'
getName();

//el constructor de una promesa recibe como parametro una función que recibe resolve y reject

const funcionConPromesas = (numero1, numero2) => {
    const resultado = numero1 + numero2;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultado);
        },5000);
    })
}
funcionConPromesas(1,4)
    .then(result => console.log(result));


//usos de this en diferentes contextos
const muchacho = {
    nombre : "steven",
    imprimirNombre : function(){
        console.log(this.nombre);
    }
}
muchacho.imprimirNombre()


const sacha  = {
    nombre : "sacha",
    twitter : "@fjfkldjf",
    saludar : function (){
        console.log(`Hola, ${this.nombre}`);
    }
}
const muchacha = {
    nombre : "marcela",
    
    
}   
muchacho.imprimirNombre.call(muchacha);
sacha.saludar.call(muchacha);
const saludo = sacha.saludar();
console.log(saludo);