//objetos

const persona = {
    nombre : 'juan',
    apellido : 'perez',
    email : 'jperez@gmail.com',
    edad : 28,
    //este es un metodo dentro de un objeto
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//acceder al metodo del objeto persona
console.log(persona.nombreCompleto());


//otra forma de definir un metodo
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '3008602434';


//acceder a las propiedades de los objetos
//se accede como si fuera un arreglo, pero la propiedad debe ser puesta como texto

console.log(persona['apellido']);

//se puede recorrer todas las propiedades del objeto con for in
for(let i in persona){
    console.log(i); //aqui se accede a los nombres de las propiedades
    console.log(persona[i]); //aqui se accede a los valores
}



//agregar y eliminar propiedades de un objeto
//agregar
persona.pareja = false;

//eliminar el valor y propiedad de un objeto
delete persona.pareja;
console.log(persona);

//formas de imprimir un objeto
//concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//for in
for(let propiedad in persona){
    console.log(persona[propiedad]);
}

//Object.values, regresa el objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

