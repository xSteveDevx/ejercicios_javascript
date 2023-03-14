//cada elemento del DOM es un objeto en JavaScript

let cabecero = document.getElementById('cabecero');

// innerHTML devuelve el valor de la etiqueta html
// let parrafo = document.getElementById('parrafo');
// console.log(`valor de la variable parrafo ${parrafo.innerHTML}`);

// si queremos modificar el valor de un elemento html con innerHTML
parrafo.innerHTML = 'Hasta luego, vuelva pronto';
console.log('hola');

//para tomar todos los elementos por tipo
let parrafos = document.getElementsByTagName('p');
console.log(`parrafos: ${parrafos.innerHTML}`);
//el metodo getElementsByITagName devuelve un arreglo
console.log(`parrafos: ${parrafos.length}`);

//para tomar todos los elementos con una misma clase
let subtitulos = document.getElementsByClassName('subtitulo');
let longitud = subtitulos.length;
for (let i = 0; i < longitud; i++) {
    console.log(subtitulos[i].innerHTML);
}


//querySelectorAll selecciona todos los elementos y clases html
let h3 = document.querySelectorAll('h3.titulo_pequeno');


//funcion de boton en el html
function mostrarValores() {
    let formulario = document.forms['formulario'];
    let texto = '';
    for (let elemento of formulario) {
        texto += elemento.value + '<br/>';
    }
    document.getElementById('valores').innerHTML = texto;
}


//acceder al formulario de manera individual
function mostrarValores() {
        let formulario = document.forms['formulario'];
        let texto = '';
        let nombre = formulario['nombre'];
        let apellido = formulario['apellido'];
        texto = nombre.value + '<br/>' + apellido.value;
        
    document.getElementById('valores').innerHTML = texto;
}


//document.write puede sobreescribir todo el contenido aun cuando ya se ha cargado la página
function mostrar(){
    let pruebaFinal = document.getElementById('modificar-titulo');
    
    pruebaFinal.innerHTML = 'Hasta pronto, no vuelva';

}


function cambiarImagen(){
    let imagen = document.getElementById('imagen').src = 'http://globalmentoring.com.mx/imagenes/html5.png';
}

function cambiarColor() {
    let pruebita = document.getElementById('pruebita').style.color = 'Red';
}


//eventos
function cambiarTexto(titulo){
    titulo.innerHTML = 'Cambiando el texto con eventos';
}

document.getElementById('nombre').onclick = cambiarTextoNombre;
function cambiarTextoNombre(){
    document.getElementById('nombre').innerHTML = 'Michael Jackson';
}


//el evento onload se ejecuta cuando acaba de cargarse el sitio web

function entrar(){
    alert('Bienvenido a la página web');
    let texto = '';
    if(navigator.cookieEnabled){
        texto = 'Las cookies están habilitadas';
    }
    else{
        texto = 'Las cookies están deshabilitadas';
    }
    document.getElementById('mostrar').innerHTML = texto;
}

//evento onchange es usual cuando se modifican los campos de texto o un formulario
function convertir(nombreInput){
    let nombre = document.getElementById('name').value.toUpperCase();
    document.getElementById('mostrarNombre').innerHTML = nombre;

    nombreInput.value = nombreInput.value.toUpperCase();

}


//evento onmouseover y onmouseout
function cambiarFuente(){
    let tituloOver = document.getElementById('eventoOver');
    tituloOver.style.fontFamily = 'Verdana';
}
function cambiarColorTitulo(){
    let tituloOver = document.getElementById('eventoOver');
    tituloOver.style.color = 'Red';
}

//eventos onmousedown (click sobre un elemento)  onmouseup (cuando se suelta el click sobre el elemento)

function darClick(){
    let mouseUp = document.getElementById('mouseup');
    mouseUp.style.color = 'blue';
}

function soltarClick(){
    let mouseUp = document.getElementById('mouseup');
    mouseUp.style.color = 'Pink';
}

//eventos onfocus  y onblur funciona con inputs
function cambiarFondo(){
    let campo = document.getElementById('campo');
    campo.style.backgroundColor = 'Purple';
}
function retornarFondo(){
    let campo = document.getElementById('campo');
    campo.style.backgroundColor = 'white';
}   


//metodo addEventListener
//cuando se usa el addEventListener no se usa "on", solamente el nombre del metodo
document.getElementById('email').addEventListener('focus', cambiar);
document.getElementById('email').addEventListener('blur', retornarBlanco);
function cambiar(evento){
    let componente = evento.target;
    componente.style.backgroundColor = 'yellow';
}
function retornarBlanco(evento){
    let componente = evento.target;
    componente.style.backgroundColor = 'white';
}


//addEventListener con función flecha
document.getElementById('telefono').addEventListener('focus', (evento) =>{
    evento.target.style.backgroundColor = 'pink';
});

document.getElementById('telefono').addEventListener('blur', (evento) =>{
    evento.target.style.backgroundColor = 'white';
});


//delegación de eventos con JavaScript
const forma = document.getElementById('forma');
forma.addEventListener('focus', (evento) => {
    evento.target.style.backgroundColor = 'pink';
}, true);

forma.addEventListener('blur', (evento) => {
    evento.target.style.backgroundColor = 'white';
}, true);
//pasando el parámetro true se especifica que lo que se pasa para el formulario
//se aplique también para los elementos internos
//esto es conocido como delegación de eventos o use capture
