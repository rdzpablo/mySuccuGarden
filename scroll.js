let ubicacion_final = window.pageYOffset;
let nav = document.querySelector(".cabezera-scroll");
window.onscroll = function(){
	let desplazamiento_actual = window.pageYOffset;

	
	if(ubicacion_final> desplazamiento_actual)
	{
		nav.classList.remove("ocultar-cabezera");
		nav.classList.add("mostrar-cabezera");
	}
	else
	{
		nav.classList.remove("mostrar-cabezera");
		nav.classList.add("ocultar-cabezera");
	}

	ubicacion_final = desplazamiento_actual;
	if(ubicacion_final== 0)
	{
		nav.classList.remove("mostrar-cabezera");
		nav.classList.add("ocultar-cabezera");
	}
}