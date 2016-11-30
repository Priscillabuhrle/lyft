var paises = [
	{
		nombre: "chile",
		prefijo: "+569",
		bandera: "img/CL.png"
	},
	{
		nombre: "mexico",
		prefijo: "+519",
		bandera: "img/MX.png"
	},
	{
		nombre: "japon",
		prefijo: "+238",
		bandera: "img/JP.png"
	},
	{
		nombre: "francia",
		prefijo: "+329",
		bandera: "img/FR.png"
	},
];

// traerme el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
// solo queda modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);