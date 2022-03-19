
let fecha = document.querySelector ("#fecha");
let hora= document.querySelector ("#hora");

function obtenerFecha (){
let time = new Date();


let diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let segundos = time.getSeconds ()
let horas = time.getHours();
let minutos = time.getMinutes ();
// console.log (time.getDay())
// console.log (fecha);
// console.log(hora);

if (segundos<10) {
    segundos ='0'+ segundos
}
if (horas<10) {
    horas ='0'+ horas
}
if (minutos<10) {
    minutos ='0'+ minutos
}

fecha.innerHTML = `Hoy es ${ diasSemana [time.getDay()]} ${time.getDate()} de ${meses [time.getMonth()]} del ${time.getFullYear ()}`
hora.innerHTML = `${horas}: ${minutos} : ${segundos}`
}

setInterval (obtenerFecha, 1000)

function cambiarColor (color) {

    switch (color) {
        case 'rosa':
        fecha.className= 'fecha relojRosa'
        hora.className =  'fecha relojRosa'
        break;
        
        case 'verde':
        fecha.className= 'fecha relojVerde'
        hora.className =  'fecha relojVerde'
        break;
        
        case 'celeste':
        fecha.className= 'fecha relojCeleste'
        hora.className =  'fecha relojCeleste'
        break;
        
        default:
        fecha.className= 'fecha relojVerde'
        hora.className =  'fecha relojVerde'
        
        }
        
}
