let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},8000);
function muestraSlides(n){
    
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';

}




/// aqui la actividad del menu

const btn = document.getElementById("btn")

const menu = document.getElementById("menu")
 
const item = document.getElementById("ul")

var btnimg = document.getElementById("imgae");

// Establece la fuente de la imagen
var estado = false
btn.addEventListener("click",()=>{
    
    menu.classList.toggle("menuactivo")
    if(menu.classList.contains("menuactivo")){
       btnimg.src = "./recurso/icos/btnCerrar.svg"
    }else{
        btnimg.src = "./recurso/icos/menu.svg"
    }
})

item.addEventListener("click",()=>{
   
    menu.classList.toggle("menuactivo")
    if(menu.classList.contains("menuactivo")){
        btnimg.src = "./recurso/icos/btnCerrar.svg"
     }else{
         btnimg.src = "./recurso/icos/menu.svg"
     }
})

// Este es el codigo para activar las cookies al seleccionar aceptar
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});
// Aqui termina el codigo de las cookies


// Aqui inicia el codigo para Enviar Correo SMTP
const Submit = document.getElementById('Submit');
const Nombre = document.getElementById('Nombre');
const Correo = document.getElementById('Email');
const Telefono = document.getElementById('Telefono');
const Servicios = document.getElementById('selector');
const Descripcion = document.getElementById('Descripcion');

Submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("Envio el correo");

    //Write html for proper format to be sent in mail
    let ebody = `
    <b>Name: </b>${Nombre.value}
    <br>
    <b>Email: </b>${Correo.value}
    <br>
    <b>Telefono no: </b>${Telefono.value}
    <br>
    <b>Servicios: </b>${Servicios.value}
    <br>
    <b>Descripcion: </b>${Descripcion.value}
    <br>
    `

    console.log(ebody);
    Email.send({
        SecureToken : "0774681b-9ebb-4ad1-89e8-e8660e7ad625",
        To : 'info@summitvi.net',
        From : "info@summitvi.net",
        Subject : "Formulario Pagina web SUMMITVI",
        Body : ebody
    }).then(boton_myBtn());
})
// Aqui termina el codigo para Enviar Correo SMTP
//comienza el modal
var modal = document.getElementById("myModal");
//var boton_myBtn = document.getElementById("Submit");
//Abrir y ejecutar despues de 2s la funcion de cerrar
function boton_myBtn() {
    modal.style.display = "block";
    setTimeout("Cerrar()",5000);
}
//funcion para cerrar
function Cerrar() {
    modal.style.display = "none";
}
//servicios
function verservico() {
    modal.style.display = "block";
    setTimeout("Cerrar()",50000);
}
//Cerrar despues de hacer click afuera
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//aqui termina el modal
