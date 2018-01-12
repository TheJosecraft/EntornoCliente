function Inicio() {
	var tiempo = new Date();
	var hora = tiempo.getHours();
	if (hora < 10) {
		hora = "0" + hora;
	}
	var minutos = tiempo.getMinutes();
	if (minutos < 10) {
		minutos = "0" + minutos;
	}
	var segundos = tiempo.getSeconds();
	if (segundos < 10) {
		segundos = "0" + segundos;
	}

	var reloj = document.querySelector("#reloj");

	reloj.innerHTML = hora + ":" + minutos + ":" + segundos;
	setInterval(Inicio, 1000);
}

window.onload = Inicio;