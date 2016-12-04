var paises = [
	{
		nombre: "chile",
		prefijo: "+569",
		bandera: "img/CL.png"
	},
	{
		nombre: "mexico",
		prefijo: "+123",
		bandera: "img/MX.png"
	},
	{
		nombre: "japon",
		prefijo: "+456",
		bandera: "img/JP.png"
	},
	{
		nombre: "francia",
		prefijo: "+789",
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

//validar numero y dar contraseña
document.getElementById("inputbandera").addEventListener("input", function() {
   cajaTel = event.target;
   //identifica al span del html
   mensaje = document.getElementById("telefonoOk");
       
   //Se va al span para mostrar mensaje
    if (inputbandera.value.length > 8){
      mensaje.innerText = "Maximo 8 numeros";
   }if (inputbandera.value.length == 8){
   	//convertir a número aleatorio
      mensaje.innerText = "código 758";
   }else {
     mensaje.innerText = "Ingresar teléfono";
   }
});