//convertir una cadena a numeros

function convertirEnteros(numero){

    let convertido = parseInt(numero);
    if(typeof convertido === 'number'){

        console.log(typeof convertido + convertido);
    }

}

convertirEnteros('20');

function convertirEnteros2(str){
    let res = parseInt(str);
    return res;
}
let numero = convertirEnteros2("15");
console.log(typeof(numero));
