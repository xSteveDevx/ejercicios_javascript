class Persona{
    static contadorPersona = 0;
    
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this.idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}


//clase empleado
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorPersona;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this.idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' ' + this._sueldo;
    }
}


//clase cliente
class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = Date(fechaRegistro);
    }
    get idCliente(){
        return this.idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}

//pruebas
let persona1 = new Persona('juan', 'carlos', 26);
console.log(persona1.toString());

let empleado1 = new Empleado('carlos', 'gaviria', 80, 250000);
console.log(empleado1.toString());

let cliente1 = new Cliente('Maria', 'Fuentes', 18);
console.log(cliente1.toString());

let cliente2 = new Cliente('Gonzalo', 'gonzales', 28);
console.log(cliente2.toString());

let cliente3 = new Cliente('Marcelo', 'agachate', 36);
console.log(cliente3.toString());