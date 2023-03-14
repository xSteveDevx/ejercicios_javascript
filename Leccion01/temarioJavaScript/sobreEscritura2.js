class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return this._nombre + ' ' + this._sueldo;
    }
}

class Gerente extends Empleado{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `${super.obtenerDetalles()} ${this._departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}
let gerente1 = new Gerente('Carlos',5000 ,'Sistemas');
console.log(gerente1.obtenerDetalles());

let empleado1 = new Empleado('Carlos', 2500);
imprimir(gerente1);
imprimir(empleado1);