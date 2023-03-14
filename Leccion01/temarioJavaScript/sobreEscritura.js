//con las clases no se aplica el hoisting
//primero se debe definir la clase, y despues llamarla
//a diferencia de las funciones que primero se pueden llamar y despues usar
class Persona{
    //crear atributos estaticos
    static contadorPersona = 0;

    //crear una constante statica 
    //no se puede usar const
    //se crea este metodo para simular una constante
    static get MAX_OBJETOS(){
        return 5;
    }


    constructor(nombre, apellido){
        //la propiedad y el metodo set no pueden tener el mismo nombre
        //por lo que se acostumbra a definir los atributos de la clase con _
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.idPersona<5){
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log('Se ha superado el máximo de objetos creables');
        }
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos, desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
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
    //sobreEscritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
    

}
let persona1 = new Persona('Juan', 'Perez');
let empleado1 = new Empleado('Maria','Perez', 'Marketing');
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(empleado1.nombre); //los metodos tambien se heredan 


console.log(empleado1.nombreCompleto()); //los metodos tambien se heredan 
//este metodo está definido en la clase padre
console.log(empleado1.toString());
let saludo = Persona.saludar();
console.log(saludo);

//un metodo static, se asocia con una clase, pero no con un objeto
// persona1.saludar(); no se puede llamar un metodo static desde un objeto


//solo se llaman desde la clase
//a un metodo static se le puede pasar como argumento un objeto
Persona.saludar();
Persona.saludar2(persona1);


//para llamar atributos estaticos se debe llamar con la clase, no con un objeto
console.log(Persona._contadorObjetosPersona);


//aunque se modifique este valor, no va a cambiar porque se definió el metodo get mas no el set
console.log(Persona.MAX_OBJETOS);


