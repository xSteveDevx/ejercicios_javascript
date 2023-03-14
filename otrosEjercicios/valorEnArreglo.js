//saber si un indice está dentro de un arreglo con operador in
let arreglo = [,'hola' ];


arreglo.forEach(element => {
    if(element =='hola'){
        console.log('la palabra está en el arreglo, en el índice' + arreglo.indexOf(element))
    }
});
