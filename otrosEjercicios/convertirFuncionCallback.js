const delay = (callback, ms) =>{
    return new Promise(resolve => {
        setTimeout(() =>{
            callback()
            resolve()
        }, ms)
    })
}
function saludar(str){
    console.log(str);
}

// delay(() => console.log('hola'), 5000);
delay( () => saludar("bienvenidos"), 10000);