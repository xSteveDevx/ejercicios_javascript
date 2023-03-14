class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = this.tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton ;
    }
    toString(){
        return this._idRaton + ' ' + this._tipoEntrada + ' ' + this._marca;
    }
}


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString(){
        return this._idTeclado + ' ' + this._tipoEntrada + ' ' + this._marca;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
    toString(){
        return this._idMonitor + ' ' + this._marca + ' ' + this._tamano;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return this._idComputadora + ' ' + this._nombre + ' ' + this._monitor + ' ' + this._teclado + ' ' + this._raton;
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(computadora){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;

        }  
        console.log(`Orden: ${this._idOrden} Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton('usb', 'hp');
let raton2 = new Raton('c', 'razor');


let teclado1 = new Teclado('bluetooth', 'magegee');
let teclado2 = new Teclado('c', 'reDragon');

let monitor1 = new Monitor('Samsung', 'Grande');
let monitor2 = new Monitor('AOC', 'Pequeño');

//nombre, monitor, teclado, raton
let computadora1 = new Computadora('Gamer', monitor1, teclado1, raton1);
let orden1 = new Orden();
console.log(computadora1.toString())
orden1.agregarComputadora(computadora1);


console.log(orden1.mostrarOrden(computadora1));

