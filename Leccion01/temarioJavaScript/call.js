//call
//llamar al metodo de un objeto, desde otro objeto
let persona1 = {
    nombre : 'juan',
    apellido : 'perez',
    nombreCompleto: function(titulo, telefono){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono ;
        //no se usa this en los dos parametros porque no propiedades del objeto
    }
}
let persona2 = {
    nombre : 'karlos',
    apellido : 'lara'
}

//uso de call
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2));
console.log(persona1.nombreCompleto.call(persona2, 'ingeniero', 3008602434));