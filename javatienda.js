const cerrar_tienda = document.querySelector(".cerrar-tienda");
const full_tienda = document.querySelector(".tienda")
cerrar_tienda.addEventListener("click",function(){
	full_tienda.classList.remove("tienda-mostrar");
	full_tienda.classList.add("tienda-cerrar");
})
