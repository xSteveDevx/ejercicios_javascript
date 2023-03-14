
//definicion de funcion antigua
function miFuncion(){
    console.log('prueba desde funcion con function');
}

//en la funcion flecha no se define nombre de la funcion, son anonimas >
//con la funcion flecha, no se aplica el hoisting
//lo comun es usar const para definir una funcion flecha
let miFuncionFlecha = () => {
    console.log('saludos desde la funcion flecha');
};

miFuncion();
miFuncionFlecha();