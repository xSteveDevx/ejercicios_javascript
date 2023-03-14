//los nombres de constructores deben ir en mayuscula
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //agregar metodos a un constructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}


//call
//llamar al metodo de un objeto, desde otro objeto




//propiedad prototype
//agrega la propiedad a todos los objetos de la clase
Persona.prototype.tel = '443322';
let persona2 = new Persona('steven','trejos','estiventrejos13@gmail.com');
persona2.tel = '98090';
console.log(persona2.tel);

let persona3 = new Persona('Maria', 'Fuentes', 'camilafuentes@gmail.com');
//toda esta sintaxis es poco usada, no recomendada

//objeto de tipo cadena
let miCadena = new String('hola');
console.log(typeof(miCadena));

let lista = [1,2,3,4,5,6,7,8,9,10,30,22,69,54,23];
for(let i = 0;i<lista.length;i++){
    if(lista[i]%2 != 0){
        console.log(lista[i]);
    }
}


