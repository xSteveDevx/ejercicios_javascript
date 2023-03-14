//calcular el factorial de un numero entero
//<> || =>   <=
resultados = [];
function calcularFactorial(n){
    let resultado = 1;
    for(let i = 1;i <= n; i++){
        
        resultado = resultado*i;
        console.log(resultado);
        
        
    }
       
}
console.log(calcularFactorial(5));