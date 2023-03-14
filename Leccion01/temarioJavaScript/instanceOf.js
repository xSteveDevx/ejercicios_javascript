class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    infoProducto(){
        return this._idProducto + ' ' + this._nombre + ' $' + this._precio;
    }
    toString(){
        return this.infoProducto();
    }
}

let producto1 = new Producto('martillo', 30000);

function imprimir(tipo){
    console.log(tipo.infoProducto());
    if(tipo instanceof Producto){
        console.log('es un objeto de tipo producto');
    }
}
imprimir(producto1);
