//Una promesa es código que tiene varios estados
//Se lanza una petición para procesar un código en caso de que la promesa se reelva correctamente
//Si no se ha ejecutado es pendiente
//.then cuando la función se resuelva
//.catch cuando haya un error
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if(expresion){
        resolver('Resolvió correctamente');
    }
    else{
        rechazar('Se produjo un error');
    }
});

//llamar la promesa
miPromesa.then( valor => console.log(valor), error => console.log((error)) 
);

//otra manera de ejecutar la promesa
miPromesa.catch( valor => console.log(valor)). catch(error => console.log(error));


//prueba con setTimeout

let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000);
});

promesa.then(valor => console.log(valor));