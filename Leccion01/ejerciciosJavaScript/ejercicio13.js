//no se puede reasignar la ubicacion de memoria de un objeto definido con const

const estudiante = {id: 7, nombre: 'Steven', apellido: 'Gallego'};
console.log(estudiante);
//se puede redefinir los atributos
estudiante.id = 9;
console.log(estudiante);


//da error
estudiante = {id: 9, nombre: 'Camilo', apellido: 'Garcias'};
console.log(estudiante);