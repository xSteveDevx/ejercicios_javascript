//reduce acepta un metodo como primer parametro

const arr = [1,2,4,5];
const prueba = arr.reduce((valorAnterior, valorAcumulado, indice) => {
    return valorAnterior + valorAcumulado
})
console.log(Math.max(...arr));
console.log(prueba);

