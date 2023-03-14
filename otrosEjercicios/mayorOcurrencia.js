//encontrar el numero que más se repite en una lista
let numeros = [1,2,3,4,4,5,6];
function contarRepeticiones(arr){
    
}
console.log( contarRepeticiones(numeros));
let arreglo = [];
let contador = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros.includes(numeros[i])){
        contador+=1;
    }
    arreglo.push(contador)
    contador = 0;
}
console.log(arreglo);
console.log(numeros.includes(4));
