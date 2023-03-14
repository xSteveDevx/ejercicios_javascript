//diferencia entre un objeto y un arreglo
let lenguajes = ['JavaScript', 'Python', 'Java'];
let persona = {
    nombre : 'Edward',
    apellido : 'Ortiz',
    codigo : 123456
};
console.log(lenguajes[0]);
console.log(persona.codigo);
console.log(Object.keys(persona));


for (const propiedad in persona) {
    console.log(propiedad);
}
function verifyPropertyObject(obj, prop){
    return prop in obj;
}
console.log("" in persona);
console.log(verifyPropertyObject(persona, "codigo"));
