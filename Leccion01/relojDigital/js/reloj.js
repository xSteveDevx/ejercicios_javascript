const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}: ${minutos}: ${segundos}`; 

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaFinal = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaFinal;

    document.getElementById('contenedor').classList.toggle('animar');

}

const formatoHora = (hora) => {
    if(hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj, 1000);