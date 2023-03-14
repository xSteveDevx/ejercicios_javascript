//agregar un arreglo al final de otro

let arreglo1 = [1,1,1,1];
let arreglo2 = [0,0,0,0];
arreglo1.push(arreglo2);
console.log(arreglo1);

//si se quiere juntar todo en un mismo arreglo, se debe hacer lo siguiente
let juntado = arreglo1.concat(arreglo2);
console.log(juntado);
