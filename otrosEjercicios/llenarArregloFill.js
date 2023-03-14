/* llenar un arreglo con el método fill*/
let array = [0,0,0,0,0,];

//el primer parámtetro es el valor con el que se va a llenar el arreglo
//el segundo es donde empieza y el tercero el índice donde va a terminar de llenar
array.fill(1,0,3);
console.log(array);

let arr = [2,2,3,3,4,4];
 arr.fill(0,1,arr.length);
 console.log(arr);

let arr2 = [];
function llenarArreglo(arr, max,iterador){
    for(let i = 0; i < iterador; i++){
        arr.push(Math.floor(Math.random() * max));
    }
    return arr2;
}
console.log(llenarArreglo(arr2, 100, 5));