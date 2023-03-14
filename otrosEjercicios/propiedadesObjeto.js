//operador in para consultar objetos
let computador = {
    id: 1001,
    procesador: 'intel core i7',
    ram: 32
}

console.log('id' in computador);
console.log('ram' in computador);



let fecha = new Date();
console.log(fecha);

//evaluar si un metodo existe en un objeto
console.log('getTime' in fecha);