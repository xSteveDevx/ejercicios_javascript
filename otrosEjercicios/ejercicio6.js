
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let documentos = [];
//<> ||
function saber_letra_dni(dni){
    if(dni < 0 || dni > 99999999){
        console.log('el valor que ha ingresado, no se puede poner');
    }
    else{
        documentos.push(dni);
        let division = dni % 23;
        let letra = letras[division];
        console.log('La letra asignada a su documento de identidad es la: ' + letra + ' ' + dni);
        }
    
}
saber_letra_dni(10047551);



