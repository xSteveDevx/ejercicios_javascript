class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(fechaRegistro){
        super(nombre, apellido);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
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
        return super.toString() + this._sueldo;
    }
}
