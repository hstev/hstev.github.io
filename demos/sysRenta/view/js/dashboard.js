$(document).ready(function(){
	$("#usuario").html(localStorage.getItem("usuario"));
})

function OpcionMenu(opc)
{
	$("#app").load(opc.id+".html");
	window.location.href = "#app";
}


