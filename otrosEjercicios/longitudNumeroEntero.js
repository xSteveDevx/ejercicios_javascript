function contarLongitudNumeroEntero(n){
    let cadena = n.toString();
    return `el número ingresado tiene ${cadena.length} dígitos`;
}
let respuesta = contarLongitudNumeroEntero(20n);
console.log(respuesta);
