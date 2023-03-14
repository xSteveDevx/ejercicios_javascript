//operaciones con arreglos 
let lenguajes = ['Java', 'JavaScript', 'Php', 'Python'];
console.log(lenguajes.length);


//redefinir
lenguajes[2] = 'MySql';
console.log(lenguajes);

//borrar valor, mas no la posicion
delete lenguajes[0];
console.log(lenguajes);


//sacar el elemento
lenguajes.pop('JavaScript');
console.log(lenguajes);