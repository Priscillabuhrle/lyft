if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(vistaUbicacion);
	} else {alert("¡Error! Este navegador no soporta la Geolocalización.");}
function vistaUbicacion(position) {
    var times = position.timestamp;
	var latitud = position.coords.latitude;
	var longitud = position.coords.longitude;
    var altitud = position.coords.altitude;	
	var exactitud = position.coords.accuracy;	
	var div = document.getElementById("mapa");
	//div.innerHTML = "Timestamp: " + times + "<br>Latitud: " + latitud + "<br>Longitud: " + longitud + "<br>Altura en metros: " + altitud + "<br>Exactitud: " + exactitud;}	
function recargarUbicacion() {	
	navigator.geolocation.watchPosition(vistaUbicacion);}	


var x=document.getElementById("demostracion");
function cargarmap(){
navigator.geolocation.getCurrentPosition(showPosition,showError);
function showPosition(position)
  {
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  latlon=new google.maps.LatLng(lat, lon)
  mapholder=document.getElementById('mapholder')
  mapholder.style.height='100vh';
  mapholder.style.width='500px';
  var myOptions={
  center:latlon,zoom:10,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
  }
function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="Denegada la peticion de Geolocalización en el navegador."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="La información de la localización no esta disponible."
      break;
    case error.TIMEOUT:
      x.innerHTML="El tiempo de petición ha expirado."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="Ha ocurrido un error desconocido."
      break;
    }
  }}
  cargarmap ();