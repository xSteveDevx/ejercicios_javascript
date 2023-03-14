//metodo get en objetos
const persona = {
    nombre : 'juan',
    apellido : 'perez',
    email : 'jperez@gmail.com',
    edad : 28,
    idioma : 'es',
    //este devuleve la propiedad en mayuscula, pero la almacena en minuscula
    get lenguaje(){
        return this.idioma.toUpperCase();
    },
    //los set son para modificar los valores de propiedades de un objeto
    //este almacena la propiedad directamente en mayuscula
    set lenguaje(lenguaje){
        this.idioma = lenguaje.toUpperCase();
    },
    //este es un metodo dentro de un objeto
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
//asi nos evitamos poner parentesis al llamar el metodo del objeto
console.log( persona.nombreCompleto ); 


//metodo set
console.log(persona.lenguaje);


persona.lenguaje = 'en';
console.log(persona.lenguaje);



