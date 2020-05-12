let menu = document.querySelector(".menu-celu");
let navegador = document.querySelector(".navegador");
let barra_menu = navegador.querySelector("ul");

menu.addEventListener("click",function(){
	barra_menu.classList.remove(".ocultar-navegador");
	barra_menu.classList.add(".mostrar-navegador");
})