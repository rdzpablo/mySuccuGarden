
const cerrar = document.querySelector(".cerrar-imagen");
const full = document.querySelector(".full-imagen")
cerrar.addEventListener("click",function(){
	full.classList.remove("mostrar");
	full.classList.add("cerrar");
})

const imagen = full.querySelector(".informacion-imagen");
const imagenMostrar = imagen.querySelector("img");

const texto = full.querySelector(".informacion-texto");
const textoMostrar = texto.querySelector("p");



const familia = document.querySelector(".familia");
const galeria = familia.querySelector(".galeria-familia");

const caja = galeria.querySelectorAll(".caja");

caja.forEach(function(element){
	element.querySelector(".full").addEventListener("click",function(){
		full.classList.remove("cerrar");
		full.classList.add("mostrar");
		imagenMostrar.src=element.querySelector("img").getAttribute("src");
		textoMostrar.innerHTML=element.querySelector("p").innerHTML;
	})
})