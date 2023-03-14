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

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llama al constructor de la clase padre
        this._departamento = departamento;


    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado1 = new Empleado('Maria','Perez', 'Marketing');
console.log(empleado1);
console.log(empleado1.nombre); //los metodos tambien se heredan 


console.log(empleado1.nombreCompleto()); //los metodos tambien se heredan 
//este metodo está definido en la clase padre
