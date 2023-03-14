//crear una función que llene un array de numeros
let arr = [];
function llenarArray(limite, max){
    for(let i = 0; i < limite; i++){
        let valor = Math.floor(Math.random() * max);
        arr.push(valor);
    }

}
llenarArray(20, 20);
console.log(arr);
console.log(arr.length);


let matriz = [];
let nuevoArreglo = [];
function llenarMatriz(arr){
    for(let i = 0; i < 10; i++){
        arr.push(nuevoArreglo);
        
    }
}
llenarArray(10,matriz);
console.log(matriz);


let matrizIdentidad = [];
function generarNumero(max){
    return Math.floor(Math.random() * max);
}

function llenarMatrizAleatorios(n){

    for(let i = 0; i < n; i++){
        let fila = [];
        for(let j = 0; j < n; j++ ){
            if(i === j){
                fila.push(generarNumero(10));
            }
            else{
                fila.push(generarNumero(10));
            }
        }
        matrizIdentidad.push(fila);
    }
    return matrizIdentidad;
}
console.log(llenarMatrizAleatorios(4));

let set = [1,2,3,4];
function verificarArreglo(arr, valor){
    if(arr.includes(valor)){
        return "lo incluye";
    }
}

console.log(verificarArreglo(set, 3));