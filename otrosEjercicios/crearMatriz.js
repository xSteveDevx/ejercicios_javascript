let matriz = [[0,1,2], [3,4,5], [6,7,8]];
matriz.forEach(element => {
    console.log(element);
});
console.log(matriz[0].length);

//acceder a un elemento de una matriz
console.log(matriz[0][3]);

let cortado = matriz.pop();
console.log(matriz);

// matriz.length = 0;
// console.log(matriz);

const a = 'hola';
let b = 'chao';
let juntar = a + b;
console.log(juntar)