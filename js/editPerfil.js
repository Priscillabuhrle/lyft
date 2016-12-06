
//document.getElementById("inputEdP").addEventListener("input", function() {
	function cambiarNombre(){
		//var nuevoNombre = $("inputEdP").val();
		var nuevoNombre=document.getElementById("inputEdP").value;

		if( nuevoNombre!== null){
			//nombreperfil.innerText = nuevoNombre;
			document.getElementById("nombreperfil").innerText = nuevoNombre;
			alert("ggg");
		}
}
cambiarNombre();