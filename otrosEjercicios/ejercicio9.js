function saberMayusculaMinuscula(cadena){
    if(isLowerCase(cadena)){
        console.log('la cadena ' + cadena + ' está toda en minúscula');
    }
    else if(cadena.toUpperCase() == true){
        console.log('la cadena ' + cadena + ' está toda en mayúscula');
    }
    
}
saberMayusculaMinuscula('HOLA');



function saberMayusculaMinuscula(cadena){
    if(cadena.toUpperCase() === true){
        return 'la cadena está en mayúscula';
    }
    else if(cadena.toLowerCase() === true){
        return 'la cadena está en minúscula';
    }
}
let resultado = saberMayusculaMinuscula('hola');
console.log(resultado);


// funcion tirar dados
// <> || =>   <=
let turnosDados = [];
function tirarDados(){
    for(let i = 0; i < 36000; i++){
        let maximo = 7;
        let turno =  Math.floor(Math.random()*maximo);
        turnosDados.push(turno);

    }
}
tirarDados();
console.log(turnosDados);















