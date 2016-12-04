// whether or not to allow the dropdown
/*function ver(){
  alert("hola");
}
ver();*/

/*function validarNombre(){
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
validarEmail();*/

// jquery

$(document).ready(function(){ 
  $('#datos').submit(function(ev){  

        var nomb = $('#nombreApellido').val();
        var correoDos = $('#input-email').val();
        
        localStorage.setItem("nombreApellido", nomb);
        localStorage.setItem("input-email", correoDos);

        document.getElementById("nombreApellido").value = "";
        document.getElementById("input-email").value = "";
  });


});

document.getElementById('input-email').addEventListener('input', function() {
   caja = event.target;
   pase = document.getElementById('correoBien');
       
   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   //Se va al span para mostrar mensaje
   if (emailRegex.test(caja.value)) {
     pase.innerText = "válido";
   } else {
     pase.innerText = "incorrecto";
   }
});


