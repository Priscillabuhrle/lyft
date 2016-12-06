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

//crear codigo tres números js
function generarCodigo(){
	var codigo = (Math.floor(Math.random()*399)+1);
	codigo = codigo.toString();
	while(codigo.length < 3){
		codigo = "0" + codigo;
	}
	localStorage.setItem('codigo', codigo);
	return codigo;
}
// crear variable con el codigo aleatorio 
var codig= generarCodigo();
//validar numero y dar contraseña
document.getElementById("inputbandera").addEventListener("input", function() {
   cajaTel = event.target;
   //identifica al span del html
   mensaje = document.getElementById("telefonoOk");
       
   //Se va al span para mostrar mensaje
   
   if (inputbandera.value.length > 8){
      mensaje.innerText = "Maximo 8 numeros, teléfono no válido";
      return false;
   }else {
     mensaje.innerText = "Ingresar teléfono";
   }
});
//Se coloca el codigo aleatorio en otra función ya que en la anterior no la tomaba
document.getElementById("inputbandera").addEventListener("input", function() {
   cajaTel = event.target;
   //identifica al span del html
   mensaje = document.getElementById("telefonoOk");
       if (inputbandera.value.length == 8){
   	//codigo aleatorio
      mensaje.innerText = "Tu código es:" + codig;
     // alert(codig);
       }
});

//validación del código
document.getElementById("codigoT").addEventListener("input", function() {
	$('#btnCod').click(function(){
	   var cajacodIngresado = $("#codigoT").val();
	   if( cajacodIngresado !== codig){
		   corr.innerText = "código inválido";
		   //el false hace que el botón no cumpla su función
		   return false;
		   //toast elimina mensaje en tiempo determinado
	   }if( cajacodIngresado === codig){
		   corr.innerText = "código válido";
	   }
	   return true;
    });
});


/*function validarcodg(){
	var codGenerado= generarCodigo();
	  alert(generarCodigo());
	var cajacodIngresado = $("#codigoT").val();
		if( codigoIngresado !== codig ){
			corr.innerText = "código inválido";
			//toast elimina mensaje en tiempo determinado
			Materialize.toast(mens, 3000);
			return false;
		}
		validarcodg();
}*/