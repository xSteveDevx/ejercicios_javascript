//async facilita el uso de promesas
//al usar async antes de una promesa, indica que ese método está obligado a regresar una promesa
let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('saludos con promesa y setTimeout'), 3000);
});


async function miFuncionPromesa(){
    return 'saludos con promesa y async';
}

miFuncionPromesa().then(valor => console.log(valor));


//await junto con async
//await espera el resultado de la promesa

async function funcioPromesaAwait(){
    let miPromesa = new Promise((resolver) => {
       resolver('Promesa con await '); 
    });

    console.log(await miPromesa);

}

funcioPromesaAwait();

//promesas await async y setTimeout
async function funcionPromesaAwaitTimeout(){
    let ultimaPromesa = new Promise((resolver) => {
       setTimeout(() => resolver('promesa con await y timeout'), 3000); 
    });
    console.log(await ultimaPromesa);
}

funcionPromesaAwaitTimeout();

//no se puede usar await fuera de una función que no esté marcada con async

