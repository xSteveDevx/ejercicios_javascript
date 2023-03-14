//uso de apply
//para llamar un metodo en un objeto que no tiene definido el metodo
let persona1 = {
    nombre : 'juan',
    apellido : 'perez',
    nombreCompleto: function(titulo, telefono){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
        //no se usa this en  los dos parametros porque no propiedades del objeto
    }
}
let persona2 = {
    nombre : 'karlos',
    apellido : 'lara'
}
console.log(persona1.nombreCompleto('Lic', '4848339'));

//para el apply, pasamos los argumentos como un arreglo
let arreglo = ['ing','65986859']
console.log(persona1.nombreCompleto.apply(persona2, arreglo ));

