//con las clases no se aplica el hoisting
//primero se debe definir la clase, y despues llamarla
//a diferencia de las funciones que primero se pueden llamar y despues usar
class Persona{
    constructor(nombre, apellido){
        //la propiedad y el metodo set no pueden tener el mismo nombre
        //por lo que se acostumbra a definir los atributos de la clase con _
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('carlos', 'gonzales');
console.log(persona1);

//en los metodos get y set al imprimir, no se necesita usar parentesis
console.log(persona1.nombre);


//accedemos al nombre indirectamente por el metodo set definido en la clase
persona1.nombre = 'marlon';
console.log(persona1);