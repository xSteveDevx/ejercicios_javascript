//mas variables de funciones flecha

//si la funcion ejecuta codigo de una sola linea, se puede definir sin abrir el cuerpo de la funcion
const miFuncionFlecha = () => console.log('saludos desde otra función flecha');

const saludar = () => {'saludos de la funcion con retorno de una linea'};

const saludo2 = () => 'saludos desde funcion flecha de una linea, con retorno sin cuerpo de funcion';

console.log(saludar());

console.log(miFuncionFlecha());
console.log(saludo2());


//si se quiere regresar un objeto
const regresaObjeto = () => ({nombre: 'juan'});

console.log(regresaObjeto());

//recibir parametros
const conParametros = (mensaje) => console.log(mensaje);
conParametros('hola, saludos con parametros');

//con varios parametros
const suma = (a, b) => a + b;
console.log(suma(20,30));