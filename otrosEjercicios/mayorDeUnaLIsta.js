// Array de números:
const numeros = [1, 2, 3, 30, 5, 700];
function encontrarMayor(numeros) {
    let mayor = 0;
    numeros.forEach(numero => {
        if(mayor < numero){
            mayor = numero;
        }
    });
    return mayor;
}
console.log(encontrarMayor(numeros));