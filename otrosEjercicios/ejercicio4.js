let valores = [true, 5, false, "saludo_real", "calimeño", 2];
valores.sort();
console.log(valores);
let cadenas = [];

valores.forEach(elemento => {
    if(typeof elemento === 'string'){
        cadenas.push(elemento);
    }
});
cadenas.forEach(palabra => {
    let mayor = '';
    if(cadenas[0].length > cadenas[1].length ){
        mayor = cadenas[0];
    }
    else{
        mayor = cadenas[1];
    }
});
console.log(mayor);