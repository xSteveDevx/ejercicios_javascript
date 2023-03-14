//agregar elementos de un array con splice
let arreglo = [1,2,3,4,5];
//desde qué posición se quiere agregar o quitar elementos
//el segundo es la cantidad de elementos que se quiere eliminar o quitar
arreglo.splice(3,0, 'saludos');
console.log(arreglo);  


//quitar elementos de un array con splice
//el primero indica donde empieza a eliminar, el segundo la cantidad de elementos
arreglo.splice(3, 2);
console.log(arreglo);