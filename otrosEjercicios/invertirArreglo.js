//invertir el orden de un arreglo con reverse
let arreglo = [1,2,3,4,5,6,7,8,9];
arreglo.reverse();
console.log(arreglo);

function cortarArreglo(array){
    arreglo.forEach(elemento => {
        if(elemento < 5 ){
            arreglo.splice(elemento);
        }
    });
    console.log(arreglo);
}

cortarArreglo(arreglo);
