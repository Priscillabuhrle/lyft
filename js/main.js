// whether or not to allow the dropdown
/*function ver(){
  alert("hola");
}
ver();*/

function validarNombre(){
	var nombre=document.getElementById("nombreApellido");
	if(nombre.value == null || nombre.value.length==0 || /^\s+$/.test(nombre.value)){
    alert("ingresar Nombre y Apellido");
    return false;
  }
   //solo letras
    if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
   alert ("Nombre y Apellido no valido, ingresar solo letras");
    return false;
  }  
  //maximo 30 letras
  else if (nombre.value.length > 30){
    alert("máximo 30 caracteres");
    return false;  
  }
}
validarNombre();

function validarEmail(){
  var correoPb=document.getElementById("input-email");
  if(correoPb.value.length > 50){
    alert("Máximo 50 caracteres");
    return false;
  }
}
validarEmail();