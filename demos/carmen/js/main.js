function Carmen(){
	var fecha = new Date();
	var nomDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
	var nomMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];	

	this.printDia = function(num){
		return nomDia[num];
	}

	this.printMes = function(num){
		return nomMes[num];
	}

	this.mostrarFecha = function(){
		var fechaC;
		fechaC = this.printDia(fecha.getDay())+" "+fecha.getDate()+" de "+this.printMes(fecha.getMonth())+" de "+fecha.getFullYear();
		return fechaC;
	}

	this.cargarPlatos = function(){
		$.getJSON("json/platos.json", function(data){
			var getData = "";
			for(var i = 0; i < data.total; i++){
				getData += '<a href="javascript:detallePlato('+i+')"><div class="card_plato">'+
								'<img src="img/platos/'+data[i].imagen+'" class="imagen_plato">'+
								'<span class="plato_titulo">'+data[i].nombre+'</span>'+
							'</div></a>';
			}
			document.getElementById("section_platos").innerHTML = getData;
		});

	}

	this.preloader = function(){
		document.getElementById("preloader").setAttribute("class", "closePreloader");
	}
}

var carmenObjt = new Carmen();

window.onload = function(){
	carmenObjt.cargarPlatos();
	carmenObjt.preloader();
	carmenObjt.mostrarFecha();
}


function detallePlato(id){
	$.getJSON("json/platos.json", function(data){
		var getData = '<span class="closeDetail" onclick="closeDetail()">x</span>'+
				'<img src="img/platos/'+data[id].imagen+'">'+
				'<div class="detalle">'+
					'<p class="colorRed"><b>'+data[id].nombre+' <span class="colorBlack">$ '+data[id].precio+'mil</span></b></p>'+
					'<p class="colorBlack">'+data[id].descripcion+'</p>'+
					'<button class="btn" id="btnO" onclick="ordenar('+id+', this.id)">Ordenar</button>'+
				'</div>'
				'<br>'+
				'<br>';
		document.getElementById("modal").innerHTML = getData;
		document.getElementById("fondo_modal").style.display = "block";
		localStorage.setItem("prod", data[id].nombre);
	});
}

function closeDetail(){
	document.getElementById("fondo_modal").style.display = "none";
}

function ordenar(id, element){
	prod = localStorage.getItem("prod");
	document.getElementById(element).display = "none";
	var formOrden = '<span class="closeDetail" onclick="closeDetail()">x</span>'+
					'<center>'+
					'<p>'+carmenObjt.mostrarFecha()+'</p>'+
					'<small>Pedido [<b>'+prod+'</b>], Necesitamos que completes los siguientes campos</small>'+
						'<form>'+
							'<input type="text" id="nombre" placeholder="nombre" class="campos" require>'+
							'<input type="number" name="contacto" class="campos" placeholder="telefono o celular" require>'+
							'<br>'+
							'<small>Utiliza el mapa para tener una direccion mas precisa.</small>'+
							'<input type="text" id="address" class="campos" placeholder="direccion"><br><input type="hidden" id="lat" size="50"><input type="hidden" id="lng" size="50">'+
    						'<div id="mapa"></div>'+
							'<br>'+
						'</form>'+
						'<button class="btn2" onclick="noDisponible()">Aceptar</button>'+
					'</center>'+
					'<br>'+
					'<br>';
	document.getElementById("modal").innerHTML = formOrden;
	google.maps.event.addDomListener(window, 'load', initMap);
	initMap();
}

function noDisponible(){
	var mensaje = "Lo sentimos\nEsta funcion no está disponible en el demo.";
	alert(mensaje);
}