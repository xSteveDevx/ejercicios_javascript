

//concatenar un numero con una cadena
nombre = "juan";
var x = nombre + 1;
console.log(typeof x);

//para concatenar una cadena con enteros se usa pararentesis para la prioridad
x = nombre + (2 + 4);
console.log(typeof(x))

//las expresiones se evaluan de izquierda a derecha, por lo que si lo primero que encuentra son nuneros
//hará primero la operacion y despues la concatenacion
x = 2 + 4 + nombre;
console.log(typeof(x));


//se pueden declarar variables en una misma linea y asignarles valores despues
let c, y;
c = 10, y = 20;


//operador ternario
let resultado = (3>2)? "verdadero":"falso";
console.log(resultado);

let numero = 9;
resultado = (numero%2==0)? "verdero": "falso";
console.log(resultado);

let number = "10";
let prueba = isNaN(number);
console.log(prueba);
let edad = parseInt(number);
//let edad = Number(number);
console.log(typeof(edad));

let autos = ['BMW','Mercedes Benz','Volvo'];

for(let i = 0;i<autos.length;i++){
    console.log(autos[i]);
}

//actualizar valor del arreglo
autos[1] = 'MercedesBenz';
console.log(autos[1]);

//agregar elementos a un arreglo
//push, lo agrega a la ultima posicion
autos.push('Audi');
console.log(autos);
console.log(autos.length);

//para dejar un espacio vacio en el array
autos[5] = 'Porsche';
console.log(autos);

//para saber si es un arreglo
console.log(Array.isArray(autos));
//otro metodo
console.log(autos instanceof Array);


//funcion es un codigo reutilizable
function miFuncion(a,b){
    console.log("suma: " + (a+b));
}
function conRetorno(a,b){
    return a + b;
}

let suma = conRetorno(30,30);
console.log(suma);




miFuncion(7,5);
miFuncion(15,250);

//hoisting, definir la funcion en cualquier parte del programa


//funciones de tipo expresion 
let r = function (a, b){return a + b};
resultado = r(60,50);
console.log(resultado);

//funciones de tipo self invoking
//este tipo de funciones no se pueden reutilizar
(function(){
    console.log("ejecutando la funcion");
})();


//metodo toString
let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//funciones flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;
console.log(sumarFuncionTipoFlecha(7,30));
resultado = sumarFuncionTipoFlecha(3,5);


//sumar todos los argumentos de una funcion 
let result = sumarTodo(5, 7, 9, 10, 6);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length;i++){
        suma+=arguments[i];
        return suma;
    }
    console.log(result);
}

//paso por valor
//cuando usamos tipos que no son objetos
//tipos primitivos no tienen atributos ni metodos asociados
let re = 10;
function cambiarValor(a){
    a = 20;
    return a;
}
cambiarValor(re);
console.log(re);


//paso por referencia
//objeto persona
const persona = {
    nombre : 'Juan',
    apellido : 'Perez'
}
function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';

}

//cambia el valor de los atributos del objeto persona
cambiarValorObjeto(persona);
console.log(persona);








